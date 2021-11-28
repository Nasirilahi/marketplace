import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Realm from 'realm';
// import Token from '../../models/Token';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  //   const [token, setToken] = useState<Realm.Results<Token> | string>('');
  //   const realmRef = useRef<Realm | null>(null);

  //   const openRealm = useCallback(async (): Promise<void> => {
  //     try {
  //       // Open a local realm file with the schema(s) that are a part of this realm.
  //       const config = {
  //         schema: [Token],
  //       };
  //       const realm = await Realm.open(config);
  //       realmRef.current = realm;
  //       const tokenResult: Realm.Results<Token> = realm.objects('Token');
  //       if (tokenResult?.length) {
  //         setToken(token);
  //       }
  //     } catch (err) {
  //       console.error('Error opening realm: ', err.message);
  //     }
  //   }, [realmRef, setToken, token]);

  //   const closeRealm = useCallback((): void => {
  //     const realm = realmRef.current;
  //     realm?.close();
  //     realmRef.current = null;
  //     setToken('');
  //   }, [realmRef]);

  //   useEffect(() => {
  //     openRealm();

  //     // Return a cleanup callback to close the realm to prevent memory leaks
  //     return closeRealm;
  //   }, [openRealm, closeRealm]);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('token').then((value: string) => {
        navigation.replace(value === null ? 'AuthRoutes' : 'AppRoutes');
      });
    }, 3000);
  }, [navigation]);

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
