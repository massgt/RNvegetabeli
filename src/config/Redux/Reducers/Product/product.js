const initialState = {
  products: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const getProduct = (State = initialState, action) => {
  console.log('ACTION PAYLOAD PRODUCT ', action.payload);

  switch (action.type) {
    case 'GET_PRODUCT_PENDING':
      return {
        ...State,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_PRODUCT_REJECTED':
      return {
        ...State,
        isPending: false,
        isRejected: true,
      };
    case 'GET_PRODUCT_FULFILLED':
      console.log('ACTION PAYLOAD PRODUCT2 ', action.payload);
      return {
        ...State,
        isPending: false,
        isFulfilled: true,
        products: action.payload,
      };
    default:
      return State;
  }
};

export default getProduct;
