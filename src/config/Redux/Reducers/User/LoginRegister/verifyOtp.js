const initialState = {
  errorMessage: "",
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const verifyOtp = (prevState = initialState, action) => {
  switch (action.type) {
    case 'VERIFY_OTP_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'VERIFY_OTP_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        errorMessage: action.payload
      };
    case 'VERIFY_OTP_FULFILLED':
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

export default verifyOtp;
