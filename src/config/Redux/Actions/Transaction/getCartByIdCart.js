import axios from 'axios';
const PORT = process.env.PORT
const HOST = process.env.HOST

// const URL_STRING = `http://192.168.6.169:5000/market`;

export const getCartByIdCart = (token, id_cart) => {
  return {
    type: 'GET_CART_BY_ID_CART',
    payload: axios.get(`http://3.86.50.214:5000/cart/cart/${id_cart}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    }
    )
  };
};
