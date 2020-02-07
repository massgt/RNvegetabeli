import {combineReducers} from 'redux';

import postRegister from '../Reducers/User/LoginRegister/postRegister';
import getLogin from '../Reducers/User/LoginRegister/getLogin';
import emailInsert from '../Reducers/User/ForgotPassword/emailInsert';
import codeInsert from '../Reducers/User/ForgotPassword/codeInsert';
import passwordInsert from '../Reducers/User/ForgotPassword/passwordInsert';
import getLoginPhone from '../Reducers/User/LoginRegister/getLoginPhone';
import patchUserBuyer from '../Reducers/User/CrudUser/patchUserBuyer';
import getUserBuyer from '../Reducers/User/CrudUser/getUserBuyer';
import getAllMarket from '../Reducers/Choose Market/getAllMarket';
import getMarket from '../Reducers/Shop/getMarket';
import getProductMarket from '../Reducers/Shop/getProductMarket';
import addProductTaken from '../Reducers/Product Taken/addProductTaken';
import addCart from '../Reducers/Cart/addCart';
import postSession from '../Reducers/iPaymu/postSession';
import getCartByIdUser from '../Reducers/Transaction/getCartByIdUser';
import getCartByIdCart from '../Reducers/Transaction/getCartByIdCart';

const reducers = combineReducers({
  postRegister,
  getLogin,
  emailInsert,
  codeInsert,
  passwordInsert,
  getLoginPhone,
  patchUserBuyer,
  getUserBuyer,
  getAllMarket,
  getMarket,
  getProductMarket,
  addProductTaken,
  addCart,
  postSession,
  getCartByIdUser,
  getCartByIdCart,
});

export default reducers;
