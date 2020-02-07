import axios from 'axios';

// const URL_STRING = `http://18.208.177.116:5000/`

export const patchUserBuyer = (data, id_user) => {
  return {
    type: 'UPDATE_USER_SELLER',
    payload: axios.patch(`http://3.86.50.214:5000/user/${id_user}`, data, {
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }),
  };
};
