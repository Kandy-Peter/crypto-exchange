import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cryptos from './components/Cryptos';
// import Header from './components/Header';
import CryptoDatails from './components/CryptoDetails';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path="/coin/:symbol" exactly element={<CryptoDatails />} />
      <Route exact path="/" exactly element={<Cryptos />} />
    </Routes>
  </BrowserRouter>
);

export default App;
