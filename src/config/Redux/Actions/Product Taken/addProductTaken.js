import axios from 'axios';
const PORT = process.env.PORT
const HOST = process.env.HOST

const URL_STRING = `http://3.86.50.214:5000/product_taken/`;

export const addProductTaken = (data) => {
  return {
    type: 'ADD_PRODUCT_TAKEN',
    payload: axios.post(
      URL_STRING,
      data,
      {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    ),
  };
};
