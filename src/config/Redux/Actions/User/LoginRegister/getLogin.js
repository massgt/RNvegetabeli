import axios from 'axios';
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const URL_STRING = `http://3.86.50.214:5000/user/login`;

export const getLogin = (email, password, role) => {
  return {
    type: 'GET_LOGIN',
    payload: axios.get(URL_STRING, {
      params: {
        email: email,
        password: password,
        role: role,
      },
    }),
  };
};
