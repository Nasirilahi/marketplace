import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthRoutes = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const AppRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
const ScreenManager = () => {
  return (
    <Stack.Navigator initialRouteName="AuthRoutes">
      {/* SplashScreen which will come once for 5 Seconds */}
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        // Hiding header for Splash Screen
        options={{headerShown: false}}
      /> */}
      {/* Auth Navigator: Include Login */}
      <Stack.Screen
        name="AuthRoutes"
        component={AuthRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppRoutes"
        component={AppRoutes}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ScreenManager;
