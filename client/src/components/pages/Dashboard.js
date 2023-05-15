import React, { useContext, useEffect, useState } from "react";
import Overview from "./Overview";
import Details from "./Details";
import Header from "./Header";
import StockContext from "../../context/StockContent";
import { fetchStockDetails, fetchQuote } from "../../utils/api/stock-api";

const Dashboard = () => {
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});

  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        console.log("fetchStockDetails", result);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        console.log("updateStockOverview", result);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <div>
      <Header name={stockDetails.name} />
      <div>
        <Overview
          symbol={stockSymbol}
          price={quote.c}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <Details details={stockDetails} />
    </div>
  );
};

export default Dashboard;
