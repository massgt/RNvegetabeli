const initialState = {
    dataUser: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false,
  };

  const getUserBuyer = (prevState = initialState, action) => {
      switch (action.type) {
          case 'GET_USER_BUYER_PENDING':
              return {
                ...prevState,
                isPending: true,
                isRejected: false,
                isFulfilled: false,
              };
            case 'GET_USER_BUYER_REJECTED' :
              return {
                ...prevState,
                isPending: false,
                isRejected: true, 
              };
            case 'GET_USER_BUYER_FULFILLED' :
              return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                dataUser: action.payload 
              };
            default :
            return prevState;
      }
  }

  export default getUserBuyer;