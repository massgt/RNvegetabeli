const initialState = {
  loginData: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const getLogin = (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET_LOGIN_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_LOGIN_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case 'GET_LOGIN_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        loginData: action.payload
      };
    default:
      return prevState;
  }
};

export default getLogin;
