import React from 'react';

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
      <div className="breaderHumb">
        Today&apos;s Crypto!
        <br />
        <span className="date"><FormatDate /></span>
      </div>
    </div>
  );
};
export default Header;
