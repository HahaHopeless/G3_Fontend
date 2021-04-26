import React from 'react';
import global_variables from '../../global_variables';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import SignUpScreen from '../screens/Signup';
import RateScreen from '../screens/Rates';
import GrocerScreen from '../screens/Grocers';

const AppStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerTitle: null,
        headerStyle: {
          backgroundColor: global_variables.colors.green,
        },
      },
    },
    Home: {
      screen: HomeScreen,
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        headerTitleStyle: {
          color: global_variables.colors.green,
          fontFamily: global_variables.fonts.semibold,
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: global_variables.colors.green,
        },
      },
    },
    Rates: {
      screen: RateScreen,
    },
    Grocers: {
      screen: GrocerScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: global_variables.colors.white,
      },
      headerStyle: {
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
      },
    },
  },
);

export default createAppContainer(AppStack);
