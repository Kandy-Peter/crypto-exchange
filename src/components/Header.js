import React from 'react';

const Header = () => (
  <div className="header-conatiner">
    <h1>Coin-Exchange</h1>
    <h3>Welcome to the largest Crypto Exchange Web app!</h3>
    <section>
      <option>Show All</option>
      <option>Top 24H</option>
    </section>
    <input type="search" placeholder="Enter your crypto Symbol..." />
  </div>
);

export default Header;
