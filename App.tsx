/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/home';
import DetailScreen from './src/screen/detail';
import CheckoutScreen from './src/screen/checkout';
import BookingScreen from './src/screen/booking';
import Login from './src/screen/login_register';
import Register from './src/screen/login_register/register';
import SplashScreen from './src/splash';

function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Checkout" component={CheckoutScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Booking" component={BookingScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;
