import axios from 'axios';
const PORT = process.env.PORT
const HOST = process.env.HOST

// const URL_STRING = `http://192.168.6.169:5000/market`;

export const getProductMarket = (token, id_market) => {
  return {
    type: 'GET_PRODUCT_MARKET',
    payload: axios.get(`http://3.86.50.214:5000/product/market/${id_market}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    }
    )
  };
};
