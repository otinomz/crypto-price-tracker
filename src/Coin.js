import React, { useState, useEffect } from "react";

export default function App({ coinimage, name, symbol, price, volume }) {
  return (
    <div className="coin-cointainer">
      <div className="coin-row">
        <div className="coin">
          <img src={coinimage} alt="crypto coin" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
