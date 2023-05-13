import React, { useState, useEffect } from 'react';
import DATABASE from '../../utils/database';
import { GET_STOCK } from '../../utils/mutations';
import { useMutation } from "@apollo/client";

export default function Dash({ stocks, setStocks }) {

    const getStock = useMutation(GET_STOCK)

    useEffect(() => {
        //GET request to the database to fetch the stock which are already in our portfolio
        const fetchData = async () => {
            try {


                console.log(getStock);
                //Validates that the database is not empty
                if (getStock && typeof getStock === "object" && !Array.isArray(getStock)) {

                    //If not empty modifies the data with fetched results and updates state
                    const dataModified = Object.values(getStock).map((stock) => ({
                        id: stock?.id || "",
                        ticker: stock?.ticker || "",
                        position: stock?.position || "",
                        quantity: stock?.quantity || "",
                        price: stock?.price || "",
                    }));
                    setStocks(dataModified);
                }
                else if (Array.isArray(getStock)) {
                    setStocks(getStock)
                }

                else {
                    setStocks([])
                }


            } catch (error) {
                /*The option how to handle the error is totally up to you. 
                Ideally, you can send notification to the user */
                console.log(error);
            }
        };

        fetchData();
    }, [setStocks]);

    //Function that removes the stock from portfolio
    const handleRemoveStock = async (stockId) => {
        try {
            //DELETE request to the database to delete specific stock by id
            await fetch(`https://${DATABASE}/${stockId}.json`, {
                method: 'DELETE',
                'Content-Type': 'application/json',
            });

            //Updates state by removing this stock
            setStocks((stocks) => stocks.filter((s) => s.id !== stockId));
        } catch (error) {
            /*The option how to handle the error is totally up to you. 
            Ideally, you can send notification to the user */
            console.log(error);
        }
    };

    return (
        <div className='portfolio-page'>
            <div className='portfolio-main-row-wrapper'>
                <div className='portfolio-main-row'>Ticker</div>
                <div className='portfolio-main-row'>Position</div>
                <div className='portfolio-main-row'>Quantity</div>
                <div className='portfolio-main-row'>Price</div>
            </div>
            {/* For each stock in database renders a row with info */}
            {stocks.map((stock) => {
                return (
                    <div className='portfolio-row-wrapper'key={stock.id}>
                        <div className='portfolio-row'>{stock.ticker}</div>
                        <div className='portfolio-row'>{stock.position}</div>
                        <div className='portfolio-row'>{stock.quantity}</div>
                        <div className='portfolio-row'>{stock.price}</div>
                        <button
                            className='remove-stock-button'
                            onClick={() => handleRemoveStock(stock.id)}
                        >
                            <span>-</span>
                        </button>
                    </div>
            );    
            })}
        </div>
    );
}
