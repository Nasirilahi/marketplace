import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import store from './store/configureStore';
import ScreenManager from './ScreenManager';

function App() {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <ScreenManager />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}

export default App;
