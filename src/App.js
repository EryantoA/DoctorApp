import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import store from '../src/redux/store';
import Router from './router';

export default function MainApp() {
  const [loading, setLoading] = useState(false);
  const stateGlobal = useSelector(state => state);
  console.log('state global: ', stateGlobal);

  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {loading && <loading />}
    </>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};
