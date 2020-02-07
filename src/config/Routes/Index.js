import React, {Component} from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  Helps,
  Shop,
  Transaction,
  HomeLogin,
  Login,
  Register,
  ListShop,
  Profile,
  aboutUs,
  privacyPolicy,
  termOfUse,
  ListCategory,
  editProfile,
  historyTrans,
  listTrans,
  detailTrans,
  sellerHome,
  sellerProfile,
  sellerLoad,
  sellerProduct,
  sellerProductDetail,
  sellerCamera,
  ShoppingCart,
  Isi1,
  Isi2,
  Isi3,
  Isi4,
  Isi5,
  Isi6,Isi7,Isi8,Isi9,Isi10,Isi11,Isi12,Isi13,Isi14,Isi15,Isi16,Isi17,Isi18,Isi19, Payment,PaymentSucces
} from '../../container/Pages/index';
import LoginRegisterHome from '../../container/Pages/LoginRegister/Home';
import insertEmail from '../../container/Pages/ForgotPassword/insertEmail';
import insertCode from '../../container/Pages/ForgotPassword/insertCode';
import insertPassword from '../../container/Pages/ForgotPassword/insertPassword';
import verifyOtp from '../../container/Pages/LoginRegister/LoginRegister/otp/';
import {Icon} from 'react-native-elements';
import iPaySuccess from '../../container/Pages/iPaySuccess';

const HomeStack = createStackNavigator(
  {
    ListShop,
    Shop,
    Payment,
    PaymentSucces,
    ListCategory,
    ShoppingCart,
    iPaySuccess
  },
  {
    headerMode: 'none',
    initialRouteName: 'Shop', //Shop
  },
);

const TransactionStack = createStackNavigator(
  {
    Transaction,
    historyTrans,
    listTrans,  
    detailTrans,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Transaction',
  },
);

const HelpsStack = createStackNavigator(
  {
    Helps,Isi1,Isi2,Isi3,Isi4,Isi5,Isi6,Isi7,Isi8,Isi9,Isi10,Isi11,Isi12,Isi13,Isi14,Isi15,Isi16,Isi17,Isi18,Isi19
  },
  {
    headerMode: 'none',
    initialRouteName: 'Helps',
  },
);

const ProfileGuestStack = createStackNavigator(
  {
    HomeLogin,
    Login,
    Register,
    insertEmail,
    insertCode,
    insertPassword,
    verifyOtp,
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeLogin',
  },
);

const ProfileUserStack = createStackNavigator(
  {
    Profile,
    termOfUse,
    privacyPolicy,
    aboutUs,
    editProfile,
    // sellerHome,
    // sellerProfile,
    // sellerLoad,
    // sellerProduct,
    // sellerProductDetail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Profile',
    // initialRouteName: 'sellerHome',
  },
);

const ProfileSellerStack = createStackNavigator(
  {
    termOfUse,
    privacyPolicy,
    aboutUs,
    sellerHome,
    sellerProfile,
    sellerLoad,
    sellerProduct,
    sellerProductDetail,
    sellerCamera,
  },
  {
    headerMode: 'none',
    initialRouteName: 'sellerHome',
  },
);

const RouteGuest = createBottomTabNavigator(
  {
    Belanja: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="store" size={24} color={tintColor} />
        ),
      },
    },
    Transaksi: {
      screen: TransactionStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="receipt" size={24} color={tintColor} />
        ),
      },
    },
    Bantuan: {
      screen: HelpsStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="help" size={24} color={tintColor} />
        ),
      },
    },

    Profil: {
      screen: ProfileGuestStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Belanja',
    tabBarOptions: {
      activeTintColor: '#F15B5D',
    },
  },
);

const RouteUser = createBottomTabNavigator(
  {
    Belanja: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="store" size={24} color={tintColor} />
        ),
      },
    },
    Transaksi: {
      screen: TransactionStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="receipt" size={24} color={tintColor} />
        ),
      },
    },
    Bantuan: {
      screen: HelpsStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="help" size={24} color={tintColor} />
        ),
      },
    },

    Profil: {
      screen: ProfileUserStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Profil',
    tabBarOptions: {
      activeTintColor: '#F15B5D',
    },
  },
);

const RouteSeller = createBottomTabNavigator(
  {
    Belanja: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="store" size={24} color={tintColor} />
        ),
      },
    },
    Transaksi: {
      screen: TransactionStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="receipt" size={24} color={tintColor} />
        ),
      },
    },
    Bantuan: {
      screen: HelpsStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="help" size={24} color={tintColor} />
        ),
      },
    },

    Profil: {
      screen: ProfileSellerStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Profil',
    tabBarOptions: {
      activeTintColor: '#F15B5D',
    },
  },
);

const Router = createSwitchNavigator(
  {
    RouteGuest,
    RouteUser,
    RouteSeller,
  },
  {
    headerMode: 'none',
    initialRouteName: 'RouteGuest', //RouteGuest
  },
);

export default createAppContainer(Router);
