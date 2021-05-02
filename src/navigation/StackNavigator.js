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
import ShopScreen from '../screens/Shop';
import SellScreen from '../screens/Sell';
import ScanScreen from '../screens/Scan';
import FooterTabs from '../components/Footer';

const AppTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Rates: {
      screen: RateScreen,
    },
    Sell: {
      screen: SellScreen,
    },
    Shops: {
      screen: ShopScreen,
    },
    Scan: {
      screen: ScanScreen,
    },
  },
  {
    tabBarComponent: props => (
      <FooterTabs {...props} navigation={props.navigation} />
    ),
  },
);

const AppStack = createStackNavigator({
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
  Signup: {
    screen: SignUpScreen,
    headerRight: null,
    headerTitle: null,
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
