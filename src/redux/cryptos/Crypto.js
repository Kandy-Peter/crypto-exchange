import axios from 'axios';

const FETCH_DATA = 'FETCH_DATA';

const initialState = {
  cryptos: [],
};

const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const fecthCryptos = () => async (dispatch) => {
  const response = await axios.get('https://api.binance.com/api/v1/ticker/24hr');
  const request = await response.data;
  dispatch(fetchData(request));
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        cryptos: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
