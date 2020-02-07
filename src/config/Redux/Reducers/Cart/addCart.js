const initialState = {
  errorMessage: "",
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const addCart = (prevState = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'ADD_CART_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        errorMessage: action.payload
      };
    case 'ADD_CART_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        errorMessage: action.payload
      };
    default:
      return prevState;
  }
};

export default addCart;
