const initialState = {
  errorMessage: '',
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const patchUserBuyer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_BUYER_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'UPDATE_USER_BUYER_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        errorMessage: action.payload
      };
    case 'UPDATE_USER_BUYER_FULFILLED':
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

export default patchUserBuyer;