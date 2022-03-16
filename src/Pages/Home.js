import React from 'react';
import useLocalStorage from 'use-local-storage';
import { IoSettingsSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { MdInvertColors } from 'react-icons/md';
import Cryptos from '../components/Cryptos';
import Loading from '../components/loader';

const Home = () => {
  const cryptos = useSelector((state) => state.reducers.cryptos);
  const defaultBlue = window.matchMedia('(prefers-color-scheme: blue)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultBlue ? 'blue' : 'pink');

  const switchTheme = () => {
    const newTheme = theme === 'pink' ? 'blue' : 'pink';
    setTheme(newTheme);
  };

  return (
    <div className="header-container" data-theme={theme} data-testid="home-page">
      {!cryptos.length ? <Loading /> : (
        <>
          <div className="head">
            <h1>CoinTracker</h1>
            <div className="icons">
              <MdInvertColors className="icons-menu" onClick={switchTheme} />
              <IoSettingsSharp className="icons-menu" />
            </div>
          </div>
          <Cryptos />
        </>
      )}
    </div>
  );
};

export default Home;
