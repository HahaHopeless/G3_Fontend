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
import {Image} from 'react-native';

const AppStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerRight: null,
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
  },
  {
    defaultNavigationOptions: {
      headerTitle: null,
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

const AppTabs = createBottomTabNavigator(
  {
    Stack: {
      screen: AppStack,
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
  },
  {
    tabBarOptions: {
      activeTintColor: global_variables.colors.green,
    },
  },
);

const AppDrawer = createDrawerNavigator({
  Tabs: AppTabs,
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppDrawer);
