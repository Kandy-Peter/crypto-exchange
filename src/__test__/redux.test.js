import reducers, { fecthCryptos } from '../redux/cryptos/Crypto';

const mock = {
  symbol: 'ETHBTC',
  priceChange: '0.00064700',
  priceChangePercent: '0.987',
  weightedAvgPrice: '0.06633764',
  prevClosePrice: '0.06556700',
  lastPrice: '0.06621500',
  lastQty: '0.09740000',
  bidPrice: '0.06621400',
  bidQty: '0.72750000',
  askPrice: '0.06621500',
  askQty: '4.26200000',
  openPrice: '0.06556800',
  highPrice: '0.06716900',
  lowPrice: '0.06536400',
  volume: '91598.33490000',
  quoteVolume: '6076.41732668',
  openTime: 1647336562012,
  closeTime: 1647422962012,
  firstId: 330005716,
  lastId: 330218780,
  count: 213065,
};

describe('Test cryptos reducer', () => {
  test('check the initialState value', () => {
    expect(reducers(undefined, {})).toEqual({
      cryptos: [],
    });
  });

  test('check if actions to cryptos', () => {
    const initial = {};
    expect(reducers(initial, fecthCryptos(mock))).toBeTruthy();
  });
});
