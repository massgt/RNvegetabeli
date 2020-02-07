const initialState = {
  loginPhoneData: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const getLoginPhone = (prevState = initialState, action) => {
  switch (action.type) {
    case 'GET_LOGIN_PHONE_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_LOGIN_PHONE_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case 'GET_LOGIN_PHONE_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        loginPhoneData: action.payload
      };
    default:
      return prevState;
  }
};

export default getLoginPhone;
