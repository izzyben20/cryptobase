import { useState, useEffect } from 'react';
import axios from 'axios';

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
    });
  }, []);

  return (
    <section className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-xl font-bold py-4">Trending Coins</h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending?.map((coin) => (
          <div
            key={coin.item.name}
            className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-4">
                <img
                  className="rounded-full"
                  src={coin.item.small}
                  alt={coin.item.name}
                />
                <div>
                  <p className="font-bold">{coin.item.name}</p>
                  <p>{coin.item.symbol.toUpperCase()}</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                alt=""
                className="w-6 mr-2"
              />
              <p>{coin.item.price_btc.toFixed(8)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
