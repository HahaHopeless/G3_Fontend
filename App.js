import React from 'react';
import {View} from 'react-native';
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/Signup';
import HomeScreen from './src/screens/Client/Home';
import RateScreen from './src/screens/Client/Rates';

const App = () => {
  return (
    <View>
      <RateScreen />
    </View>
  );
};

export default App;
