// 내가 가지고 있는 달러를 입력하면
// 선택한 코인을 얼만큼 살 수 있는지 나오는 추가 챌린지


import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
          .then((response)=>(response.json()))
          .then((json) => {
              setCoins(json);
              setLoading(false);
          });
  },[]);
  return (
    <div>
        <h1>The Coins! {loading? "" : `(${coins.length})`}</h1>
        {loading ? <strong>Loading...</strong> :
            (<select>
            {coins.map((coin => <option key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USB</option>))}
            </select>)}
        {/*<ul>*/}
        {/*    {coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</li>)}*/}
        {/*</ul>*/}

    </div>
  );
}

export default App;
