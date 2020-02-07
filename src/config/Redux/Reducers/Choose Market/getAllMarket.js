const initialState = {
  marketData: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const getAllMarket = (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_MARKET_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_ALL_MARKET_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case 'GET_ALL_MARKET_FULFILLED':
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

export default getAllMarket;
