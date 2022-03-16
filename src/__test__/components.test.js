import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';

import Cryptos from '../components/Cryptos';
import Header from '../components/Header';
import Loading from '../components/loader';
import Home from '../Pages/Home';

afterEach(() => {
  cleanup();
});

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
  };
};

const Mocked = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
);

describe('test the Home page', () => {
  test('check if the Home components it rendered correctly', () => {
    render(<Mocked />);
    const homePage = screen.getByTestId('home-page');
    expect(homePage).toBeTruthy();
  });

  test('test render snapshot for home page', () => {
    const tree = renderer.create(<Mocked />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('test the Loading page', () => {
  it('test if the laoding is rendering correctly', () => {
    render(<Loading />);
    const loading = screen.getByTestId('loading-page');
    expect(loading).toBeTruthy();
  });

  test('test loading snapshot for loading page', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Loading />
        </BrowserRouter>
      </Provider>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('check if the Header is rendering correclty', () => {
  render(<Header />);
  const header = screen.getByTestId('header-page');
  expect(header).toBeTruthy();
});

it('Cryptos components it render correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Cryptos />
      </BrowserRouter>
    </Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
