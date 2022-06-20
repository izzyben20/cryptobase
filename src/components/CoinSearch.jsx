import { useState } from 'react';
import CoinItem from './CoinItem';

const CoinSearch = ({ coins }) => {
  const [searchCoin, setSearchCoin] = useState('');

  return (
    <section className="rounded-div my-5 pb-8">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center  md:text-right">
        <h1 className="text-xl font-bold my-2">Search Crypto</h1>
        <form>
          <input
            className='w-full bg-primary border border-input px-4 py-2 rounded-xl shadow-xl'
            type="text"
            placeholder="Search a coin"
            onChange={(e) => setSearchCoin(e.target.value)}
          />
        </form>
      </div>

      <table className='w-full border-collapse text-center'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h Volume</th>
            <th className='hidden sm:table-cell'>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins &&
            coins
              .filter((val) => {
                if (searchCoin === '') {
                  return val;
                }
                return val.name
                  .toLowerCase()
                  .includes(searchCoin.toLowerCase());
              })
              .map((coin) => <CoinItem key={coin.id} coin={coin} />)}
        </tbody>
      </table>
    </section>
  );
};

export default CoinSearch;
