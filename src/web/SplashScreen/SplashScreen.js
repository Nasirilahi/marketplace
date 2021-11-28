import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';

const SplashScreen = () => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../common/assets/logo_splash.jpeg')}
        style={styles.image}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  image: {
    marginLeft: 8,
    height: 200,
    width: 200,
    borderRadius: 100,
    margin: 30,
  },
});
