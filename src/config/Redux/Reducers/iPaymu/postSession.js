const initialState = {
  data: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const postSession = (prevState = initialState, action) => {
  switch (action.type) {
    case 'POST_SESSION_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_SESSION_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        data: action.payload
      };
    case 'POST_SESSION_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        data: action.payload
      };
    default:
      return prevState;
  }
};

export default postSession;
