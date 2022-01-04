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
        console.log(res.data);
      });
  });

  return (
    <div className="App">
      <h1>Crypto Price Tracker with search feature</h1>
      <p>Search a currency</p>
    </div>
  );
}
