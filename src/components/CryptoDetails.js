import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fecthCryptos } from '../redux/cryptos.js/Crypto';

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
          <div className="main-clm">
            <img src="" alt="crypto-img" />
            <h1>{detail.symbol}</h1>
          </div>
          <span>CRYPTO DETAILS:</span>
          <ul className="coin-cards">
            <li className="card">{detail.priceChangePercent}</li>
            <li className="card">{detail.lastPrice}</li>
            <li className="card">{detail.volume}</li>
            <li className="card">{detail.highPrice}</li>
            <li className="card">{detail.lowPrice}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CryptoDatails;
