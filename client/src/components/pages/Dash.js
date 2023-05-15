import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from 'react';
import DATABASE from '../../utils/database';
import { GET_STOCK } from '../../utils/queries';


export default function Dash({ stocks, setStocks }) {

    const { loading, error, data } = useQuery(GET_STOCK)

    useEffect(() => {

        //GET request to the database to fetch the stock which are already in our portfolio
        const fetchData = async () => {
            try {
                if (loading) console.log("loading")
                if (error) console.log("error")
                console.log(data.getStock);


                if (!loading && data) {

                    //If not empty modifies the data with fetched results and updates state
                    const stockStuff = data.getStock
                    const dataModified = stockStuff.map((stock) => ({

                        id: stock?.id || "",
                        ticker: stock?.ticker || "",
                        position: stock?.position || "",
                        quantity: stock?.quantity || "",
                        price: stock?.price || "",
                    }));
                    setStocks(dataModified);
                }

            } catch (error) {
                /*The option how to handle the error is totally up to you. 
                Ideally, you can send notification to the user */
                console.log(error);
            }
        };

        fetchData();
    }, [data, loading, error, setStocks]);

    //Function that removes the stock from portfolio
    // const handleRemoveStock = async (stockId) => {
    //     try {
    //         //DELETE request to the database to delete specific stock by id
    //         await fetch(`https://${DATABASE}/${stockId}.json`, {
    //             method: 'DELETE',
    //             'Content-Type': 'application/json',
    //         });

    //         //Updates state by removing this stock
    //         setStocks((stocks) => stocks.filter((s) => s.id !== stockId));
    //     } catch (error) {
    //         /*The option how to handle the error is totally up to you. 
    //         Ideally, you can send notification to the user */
    //         console.log(error);
    //     }
    // };

    return (
        <div className='portfolio-page'>
            <div className='portfolio-main-row-wrapper flex justify-center bg-gray-900'>
                <div className='portfolio-main-row p-5 text-2xl'>Ticker</div>
                <div className='portfolio-main-row p-5 text-2xl'>Position</div>
                <div className='portfolio-main-row p-5 text-2xl'>Quantity</div>
                <div className='portfolio-main-row p-5 text-2xl'>Price</div>
            </div>
            {/* For each stock in database renders a row with info */}
            {stocks.map((stock) => {
                return (
                    <div className='portfolio-row-wrapper flex justify-center' key={stock.id}>
                        <div className='portfolio-row p-8 px-10'>{stock.ticker}</div>
                        <div className='portfolio-row p-8 px-10'>{stock.position}</div>
                        <div className='portfolio-row p-8 px-10'>{stock.quantity}</div>
                        <div className='portfolio-row p-8 px-10'>{stock.price}</div>
                        {/* <button
                            className='remove-stock-button'
                            onClick={() => handleRemoveStock(stock.id)}
                        >
                            <span>-</span>
                        </button> */}
                    </div>
                );
            })}
        </div>
    );
}
