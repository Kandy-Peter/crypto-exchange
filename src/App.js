import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CryptoDatails from './components/CryptoDetails';
import Cryptos from './components/Cryptos';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path="/coin/:symbol" exactly element={<CryptoDatails />} />
      <Route exact path="/" element={<Cryptos />} />
    </Routes>
  </BrowserRouter>
);

export default App;
