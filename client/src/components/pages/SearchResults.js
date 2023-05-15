import React, { useContext } from "react";
import StockContext from "../../context/StockContent";
import input from "../pages/Search";

const SearchResults = ({ results, input }) => {
  const { setStockSymbol } = useContext(StockContext);
  console.log(setStockSymbol);
  console.log(results);
  console.log("input", input);
  return (
    <ul className="border-2 w-full rounded-md h-64 overflow-y-scroll sticky-bottom p-5">
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md"
            onClick={() => setStockSymbol(item.symbol)}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
