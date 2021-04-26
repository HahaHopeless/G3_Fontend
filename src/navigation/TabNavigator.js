import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator, Tab} from '@react-navigation/bottom-tabs';
import RateScreen from '../screens/Rates';

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Rates" component={RateScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default createBottomTabNavigator(TabNavigator);
