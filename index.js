import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/config/Redux/store';

// const store = configureStore()

const RNRedux = () => {
 return (
   <Provider store={store}>

     <App />
   </Provider>
 );
}
 


AppRegistry.registerComponent(appName, () => RNRedux)