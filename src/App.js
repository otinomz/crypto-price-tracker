import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

export default function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert("there is an error"));
  }, []);

  return (
    <div className="coin-app">
      <h1>Crypto Price Tracker with search feature</h1>
      <p>Search a currency</p>

      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>

        <form>
          <input
            type="text"
            placeholder="Search name of coins"
            className="coin-input"
          />
        </form>
      </div>
    </div>
  );
}
