import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdInvertColors } from 'react-icons/md';

const Header = () => {
  const padTo2Dgigits = (num) => num.toString().padStart(2, '0');
  const date = new Date();
  const FormatDate = () => [
    padTo2Dgigits(date.getDate()),
    padTo2Dgigits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');

  return (
    <div className="header-container">
      <div className="head">
        <h1>CoinTracker</h1>
        <div className="icons">
          <MdInvertColors className="icons-menu" />
          <IoSettingsSharp className="icons-menu" />
        </div>
      </div>
      <div className="breaderHumb">
        Welcome to
        <br />
        the todays Crypto!
        <br />
        <FormatDate />
      </div>
    </div>
  );
};
export default Header;
