import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import { fecthCryptos } from '../redux/cryptos.js/Crypto';
import Header from './Header';
import Image from '../Images/Coins';
import Loading from './loader';

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
      {!matchValue.length ? (<Loading />) : (
        <>
          <Header />
          <div className="description">
            Top 30:
            <div className="search-box">
              <input
                type="search"
                placeholder="Search Symbol..."
                onChange={searchStock}
                value={search}
              />
              <a href="#search">
                <RiSearchLine id="search-icon" />
              </a>
            </div>
          </div>
          <div className="all_cryptos">
            {matchValue.slice(0, 30).map((coin) => (
              <Link to={`coin/${coin.symbol}`} className="container" key={coin.symbol}>
                <div className="card-row">
                  <span id="arrow-icon"><FaArrowCircleRight /></span>
                  <span className="img-clm">
                    <img src={Image(coin.symbol)} alt="crypto-img" />
                  </span>
                  <div className="crypto-card">
                    <h4>{coin.symbol}</h4>
                    <p className={coin.priceChangePercent > 0 ? 'green_p' : 'red_p'}>
                      {coin.priceChangePercent > 0 ? (`${coin.priceChangePercent}%`) : (`${coin.priceChangePercent}%`)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cryptos;
