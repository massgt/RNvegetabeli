const initialState = {
  cartData: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const getCartByIdUser = (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET_CART_BY_ID_USER_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_CART_BY_ID_USER_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case 'GET_CART_BY_ID_USER_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        cartData: action.payload
      };
    default:
      return prevState;
  }
};

export default getCartByIdUser;
