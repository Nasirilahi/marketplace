import React from 'react';
import SplashScreen from './SplashScreen';
import {View, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <SplashScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: '100%', paddingHorizontal: 50},
});

export default App;
