import axios from 'axios';
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// const URL_STRING = `http://${HOST}:5000/user/verifyforgot`;

export const passwordInsert = (data, id_user) => {
  return {
    type: 'PASSWORD_INSERT',
    payload: axios.patch(
      `http://3.86.50.214:5000/user/resetpassword/${id_user}`,
      data,
      {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    ),
  };
};
