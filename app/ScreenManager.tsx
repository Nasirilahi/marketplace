import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import CartScreen from './screens/Checkout';
import ThankYouScreen from './screens/ThankYou';
import CategoriesScreen from './screens/Categories';
import {Colors} from './constants';

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

const AppRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              style={{backgroundColor: 'transparent'}}
              name="home"
              size={30}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.GRO3,
          tabBarInactiveTintColor: Colors.GRC4,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconMat
              style={{backgroundColor: 'transparent'}}
              name="category"
              size={30}
              color={color}
            />
          ),
          tabBarActiveTintColor: Colors.GRO3,
          tabBarInactiveTintColor: Colors.GRC4,
        }}
      />
    </Tab.Navigator>
  );
};
const ScreenManager = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      {/* SplashScreen which will come once for 5 Seconds */}
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        // Hiding header for Splash Screen
        options={{headerShown: false}}
      />
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
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen
        name="Thankyou"
        component={ThankYouScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ScreenManager;
