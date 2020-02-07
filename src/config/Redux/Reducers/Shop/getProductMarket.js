const initialState = {
  product: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const getProductMarket = (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_MARKET_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_PRODUCT_MARKET_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case 'GET_PRODUCT_MARKET_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        product: action.payload
      };
    default:
      return prevState;
  }
};

export default getProductMarket;
