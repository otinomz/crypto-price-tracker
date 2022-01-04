import "./styles.css";

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

export default function App() {
  return (
    <div className="App">
      <h1>Crypto Price Tracker with search feature</h1>
      <p>Search a currency</p>
    </div>
  );
}
