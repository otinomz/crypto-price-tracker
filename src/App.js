import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import Coin from "./Coin";
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
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
            onChange={handleChange}
          />
        </form>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.market_cap}
              price={coin.current_price}
            />
          );
        })}
      </div>
    </div>
  );
}
