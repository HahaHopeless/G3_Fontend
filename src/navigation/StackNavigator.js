import React from 'react';
import global_variables from '../../global_variables';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import SignUpScreen from '../screens/Signup';
import RateScreen from '../screens/Rates';
import GrocerScreen from '../screens/Grocers';
import SellScreen from '../screens/Sell';
import ScanScreen from '../screens/Scan';
import {Image} from 'react-native';

const AppTabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tabInfo, focused}) => {
        return (
          <Image
            source={
              focused
                ? require('../assets/icons/active/home.png')
                : require('../assets/icons/home.png')
            }
            style={{
              tintColor: global_variables.colors.green,
              width: 35,
              height: 35,
            }}
          />
        );
      },
    },
  },
  Rates: {
    screen: RateScreen,
    navigationOptions: {
      tabBarIcon: ({tabInfo, focused}) => {
        return (
          <Image
            source={
              focused
                ? require('../assets/icons/active/rates.png')
                : require('../assets/icons/rates.png')
            }
            style={{
              tintColor: global_variables.colors.green,
              width: 35,
              height: 35,
            }}
          />
        );
      },
    },
  },
  Sell: {
    screen: SellScreen,
    navigationOptions: {
      tabBarIcon: ({tabInfo, focused}) => {
        return (
          <Image
            source={
              focused
                ? require('../assets/icons/active/sell.png')
                : require('../assets/icons/sell.png')
            }
            style={{
              tintColor: global_variables.colors.green,
              width: 35,
              height: 35,
            }}
          />
        );
      },
    },
  },
  Grocers: {
    screen: GrocerScreen,
    navigationOptions: {
      tabBarIcon: ({tabInfo, focused}) => {
        return (
          <Image
            source={
              focused
                ? require('../assets/icons/active/grocers.png')
                : require('../assets/icons/grocers.png')
            }
            style={{
              tintColor: global_variables.colors.green,
              width: 35,
              height: 35,
            }}
          />
        );
      },
    },
  },
  Scan: {
    screen: ScanScreen,
    navigationOptions: {
      tabBarIcon: ({tabInfo, focused}) => {
        return (
          <Image
            source={
              focused
                ? require('../assets/icons/active/scan.png')
                : require('../assets/icons/scan.png')
            }
            style={{
              tintColor: global_variables.colors.green,
              width: 35,
              height: 35,
            }}
          />
        );
      },
    },
  },
});

const AppStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    screen: LoginScreen,
    navigationOptions: {
      headerRight: null,
      headerTitle: null,
      headerStyle: {
        backgroundColor: global_variables.colors.green,
      },
    },
  },
  Signup: {
    screen: SignUpScreen,
    headerRight: null,
    headerTitle: null,
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
  Tabs: {
    screen: AppTabs,
  },
});

export default createAppContainer(AppStack);
