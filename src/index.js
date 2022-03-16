import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/ConfigureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
