import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Realm from 'realm';
import Token from '../../models/Token';
import styles from './LoginStyles';
import {validate, ValidateType} from '../../common/helpers/Validator';
import {API_URL} from '../../constants';

interface formData {
  username: string;
  password: string;
}

interface LoginProps {
  navigation: any;
}

const LoginScreen = ({navigation}: LoginProps) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [token, setToken] = useState<Realm.Results<Token> | string>('');
  const realmRef = useRef<Realm | null>(null);

  const openRealm = useCallback(async (): Promise<void> => {
    try {
      // Open a local realm file with the schema(s) that are a part of this realm.
      const config = {
        schema: [Token],
      };
      const realm = await Realm.open(config);
      realmRef.current = realm;
      const tokenResukt: Realm.Results<Token> = realm.objects('Token');
      if (tokenResukt?.length) {
        setToken(token);
      }
    } catch (err) {
      console.error('Error opening realm: ', err.message);
    }
  }, [realmRef, setToken, token]);

  const closeRealm = useCallback((): void => {
    const realm = realmRef.current;
    realm?.close();
    realmRef.current = null;
    setToken('');
  }, [realmRef]);

  useEffect(() => {
    openRealm();

    // Return a cleanup callback to close the realm to prevent memory leaks
    return closeRealm;
  }, [openRealm, closeRealm]);

  const handleSubmitPress = async () => {
    if (loading) {
      return;
    }
    if (isValid()) {
      return;
    }

    setLoading(true);
    const dataToSend = {username: userName, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
    })
      .then(res => res.json())
      .then(reponse => {
        if (reponse?.token) {
          const realm = realmRef.current;
          realm?.write(() => {
            realm?.create('Token', Token.generate(reponse.token));
          });
          AsyncStorage.setItem('token', reponse.token);
          navigation.replace('AppRoutes');
        } else {
          setErrortext('Error');
          console.log('Please check your email id or password');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
      });
  };

  const isValid = (): boolean => {
    if (!validate(ValidateType.TEXT)(userName)) {
      Toast.show({
        type: 'error',
        text1: 'User',
        text2: 'UserName is required',
        visibilityTime: 3000,
      });
      return true;
    }
    if (!validate(ValidateType.TEXT)(userPassword)) {
      Toast.show({
        type: 'error',
        text1: 'Password',
        text2: 'Password is required',
        visibilityTime: 3000,
      });
      return true;
    }
    return false;
  };
  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView enabled>
          <Image
            source={require('../../common/assets/logo.png')}
            style={styles.logoImage}
          />
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={useName => setUserName(useName)}
              placeholder="Enter User Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              testID="usernameInput"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              returnKeyType="next"
              testID="passwordInput"
            />
          </View>
          {errortext !== '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitPress}>
            {loading ? (
              <ActivityIndicator size="small" color={'white'} />
            ) : (
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            )}
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
