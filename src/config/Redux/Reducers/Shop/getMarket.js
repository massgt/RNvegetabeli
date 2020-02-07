const initialState = {
  marketData: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const getMarket = (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET_MARKET_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_MARKET_REJECTED':
      console.log(action.payload," INI PAYLOAD")
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case 'GET_MARKET_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        marketData: action.payload
      };
    default:
      return prevState;
  }
};

export default getMarket;
