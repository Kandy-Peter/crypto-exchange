import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import { fecthCryptos } from '../redux/cryptos.js/Crypto';
import Header from './Header';
import Image from '../Images/Coins';

const Cryptos = () => {
  const cryptos = useSelector((state) => state.reducers.cryptos)
    .filter((coin) => coin.symbol.includes('USDT'));
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fecthCryptos());
  }, []);

  const searchStock = (e) => {
    setSearch(e.target.value);
  };

  const matchValue = cryptos.filter((stock) => Object.keys(stock).some((key) => stock[key]
    .toString()
    .toLowerCase()
    .includes(search.toLocaleLowerCase())));

  return (
    <div className="cryptos_row">
      <Header />
      <div className="description">
        Top 20 rising Cryptos Currency.
        <input
          type="search"
          placeholder="Enter your crypto Symbol..."
          onChange={searchStock}
          value={search}
        />
      </div>
      <div className="all_cryptos">
        {matchValue.slice(0, 30).map((coin) => (
          <Link to={`coin/${coin.symbol}`} className="container" key={coin.symbol}>
            <div className={coin.priceChange > 0 ? 'coin-card green-bg' : 'coin-card red-bg'}>
              <span><FaArrowCircleRight /></span>
              <div className="crypto-card">
                <h3 className="card-title">
                  {' '}
                  {coin.symbol}
                  <br />
                  {coin.priceChangePercent > 0 ? (`+${coin.priceChangePercent}%`) : (`-${coin.priceChangePercent}%`)}
                </h3>
              </div>
              <span className="arrow-details">
                <img src={Image(coin.symbol)} alt="crypto-img" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cryptos;
