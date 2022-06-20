import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import axios from 'axios';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import CoinPage from './pages/CoinPage';
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  const [coins, setCoins] = useState([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
