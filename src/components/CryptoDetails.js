import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fecthCryptos } from '../redux/cryptos/Crypto';
import Image from '../Images/Coins';

const CryptoDatails = () => {
  const myCoins = useSelector((state) => state.reducers.cryptos);
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(fecthCryptos);
  }, []);

  const { symbol } = useParams();
  const cryptos = myCoins?.filter((item) => item.symbol === symbol);

  return (
    <div className="details_container">
      {cryptos?.map((detail) => (
        <div key={detail.symbol}>
          <div className="details-header">
            <Link to="/">
              <IoIosArrowBack />
            </Link>
            <p>{detail.symbol}</p>
          </div>
          <div
            className="main-clm"
            style={{ '--img': `url(${Image(detail.symbol)})` }}
          >
            <h1>{detail.symbol}</h1>
          </div>
          <div className="descr"><p>CRYPTO DETAILS:</p></div>
          <ul className="coin-cards">
            <li className="card">
              <p>Price Change Percent:</p>
              <p>{detail.priceChangePercent}</p>
            </li>
            <li className="card">
              <p>Last Price:</p>
              <p>{detail.lastPrice}</p>
            </li>
            <li className="card">
              <p>Volume:</p>
              <p>{detail.volume}</p>
            </li>
            <li className="card">
              <p>High Price</p>
              <p>{detail.highPrice}</p>
            </li>
            <li className="card">
              <p>Low Price:</p>
              <p>{detail.lowPrice}</p>
            </li>
            <li className="card">
              <p>Price Change:</p>
              <p>{detail.priceChange}</p>
            </li>
            <li className="card">
              <p>Open Price:</p>
              <p>{detail.openPrice}</p>
            </li>
            <li className="card">
              <p>Count:</p>
              <p>{detail.count}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CryptoDatails;
