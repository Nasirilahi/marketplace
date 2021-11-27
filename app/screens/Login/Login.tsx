import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import styles from './LoginStyles';
import {validate, ValidateType} from '../../common/helpers/Validator';
import {API_URL} from '../../constants';

interface formData {
  username: string;
  password: string;
}

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const handleSubmitPress = async () => {
    if (loading) {
      return;
    }
    if (isValid()) {
      return;
    }

    setLoading(true);
    const dataToSend = {username: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    //
    formBody = formBody.join('&');
    // console.log('formBody', formBody)
    fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
    })
      .then(res => res.json())
      .then(token => {
        if (token) {
          navigation.replace('AppRoutes');
        } else {
          setErrortext('Error');
          console.log('Please check your email id or password');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  const isValid = (): boolean => {
    if (!validate(ValidateType.TEXT)(userEmail)) {
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
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
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
            />
          </View>
          {errortext !== '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitPress}>
            <Text style={styles.buttonTextStyle}>LOGIN</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
