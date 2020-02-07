const initialState = {
  errorMessage: "",
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const insertEmail = (prevState = initialState, action) => {
  switch (action.type) {
    case 'INSERT_EMAIL_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'INSERT_EMAIL_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        errorMessage: action.payload
      };
    case 'INSERT_EMAIL_FULFILLED':
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

export default insertEmail;
