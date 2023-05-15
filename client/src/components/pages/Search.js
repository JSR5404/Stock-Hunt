import React, { useContext, useState } from "react";
import SearchResults from "./SearchResults";
import { searchSymbol } from "../../utils/api/stock-api";

const Search = () => {
  const [input, setInput] = useState("");

  const [bestMatches, setBestMatches] = useState([]);

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbol(input);
        const result = searchResults.result.filter(
          (item) => !item.symbol.includes(".")
        );
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
    }
  };

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex row my-5">
        <input
          type="text"
          value={input}
          className="w-full px-4 py-2 rounded-md text-lg"
          placeholder="Search stock"
          onChange={(event) => setInput(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              updateBestMatches();
            }
          }}
        />
        {input && <button onClick={clear} className="m-1"></button>}
        <button
          onClick={updateBestMatches}
          className="h-8 w-8 bg-orange-600 rounded-md flex justify-center items-center m-1"
        ></button>
      </div>
      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} input={input} />
      ) : null}
    </div>
  );
};

export default Search;
