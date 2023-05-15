import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Dash from "./components/pages/Dash";
import Search from "./components/pages/Search";
import Settings from "./components/pages/Settings";
import { keepTheme } from "./utils/themes";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import StockContext from "../src/context/StockContent";
import Dashboard from "../src/components/pages/Dashboard";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [stocks, setStocks] = useState([]);
  const [isPortfolioReady, setIsPortfolioReady] = useState(false);
  const [stockSymbol, setStockSymbol] = useState();

  useEffect(() => keepTheme());
  return (
    <ApolloProvider client={client}>
      <Router>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <Navbar />
          {/* <Dashboard /> */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/dash"
              element={
                !isPortfolioReady ? (
                  <div className="portfolio-configuration">
                    <Dash stocks={stocks} setStocks={setStocks} />
                    <div className="portfolio-button-continue-wrapper">
                      <button
                        className="portfolio-button-continue"
                        onClick={() => setIsPortfolioReady(true)}
                      >
                        <span>Continue</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="portfolio-monitor">
                    <div className="portfolio-button-back-wrapper">
                      <button
                        className="portfolio-button-back"
                        onClick={() => setIsPortfolioReady(false)}
                      >
                        <span>Go back to Portfolio</span>
                      </button>
                    </div>
                  </div>
                )
              }
            />
            <Route path="/search" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          
        </StockContext.Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
