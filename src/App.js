import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from '../src/redux/store';
import Router from './router';

export default function App() {
  const [loading, setLoading] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {loading && <loading />}
    </Provider>
  );
}
