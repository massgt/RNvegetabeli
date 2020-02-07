import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const getUserBuyer = (id_user, token) => {
  return {
    type: 'GET_USER_BUYER',
    payload: axios.get(`http://3.86.50.214:5000/user/id/${id_user}`, token, {
      headers: {
        Authorization: `Bearer ${AsyncStorage.getItem('@accessToken')}`,
      },
    }),
  };
};
