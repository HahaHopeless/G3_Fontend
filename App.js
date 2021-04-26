import React from 'react';
import {View} from 'react-native';
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/Signup';
import HomeScreen from './src/screens/Home';
import RateScreen from './src/screens/Rates';
import AppStack from './src/navigation/StackNavigator';

const App = () => {
  return <AppStack />;
};

export default App;
