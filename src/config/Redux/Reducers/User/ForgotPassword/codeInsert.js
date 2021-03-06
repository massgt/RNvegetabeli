const initialState = {
  errorMessage: "",
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const codeInsert = (prevState = initialState, action) => {
  switch (action.type) {
    case 'CODE_INSERT_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'CODE_INSERT_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        errorMessage: action.payload
      };
    case 'CODE_INSERT_FULFILLED':
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

export default codeInsert;
