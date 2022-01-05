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

  // to handle name change
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // mapping through the coins to filter them
  // when searching through a particular  value name
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <h1>Crypto Price Tracker with search feature</h1>
      <div className="coin-search">
        <form>
          <input
            type="text"
            placeholder="Search name of coins"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {/* applying some JSX below for filtering coins */}
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            coinimage={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}
