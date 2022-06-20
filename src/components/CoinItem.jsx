import { useContext, useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { UserContext } from '../context/AuthContext';
import { db } from '../firebase';

const CoinItem = ({ coin }) => {
  const [savedCoin, setSaveCoin] = useState(false)
  const { user } = useContext(UserContext)

  const coinPath = doc(db, 'users', `${user?.email}`)
  const saveCoin = async () => {
    if(user?.email){
      setSaveCoin(true)
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol
        })
      })
    } else {
      alert('Please sign in to save coin to watch list')
    }
  }
  return (
    <>
      <tr className='h-[80px] border-b overflow-hidden'>
        <td onClick={saveCoin}>
          {savedCoin ? <AiFillStar className='cursor-pointer' /> : <AiOutlineStar className='cursor-pointer' /> }
        </td>
        <td>{coin.market_cap_rank}</td>
        <td>
          <Link to={`/coin/${coin.id}`}>
            <div className='flex items-center'>
              <img src={coin.image} alt={coin.id} className='w-6 rounded-full mr-2' />
              <p className='hidden sm:table-cell mr-2'>{coin.name}</p>
            </div>
          </Link>
        </td>
        <td>{coin.symbol.toUpperCase()}</td>
        <td>${coin.current_price.toLocaleString()}</td>
        <td className={coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
        <td className='w-[180px] hidden md:table-cell'>${coin.total_volume.toLocaleString()}</td>
        <td className='w-[180px] hidden sm:table-cell'>${coin.market_cap.toLocaleString()}</td>
        <td>
          <Sparklines data={coin.sparkline_in_7d.price} width={300}>
            <SparklinesLine color="teal" />
          </Sparklines>
        </td>
      </tr>
    </>
  );
};

export default CoinItem;
