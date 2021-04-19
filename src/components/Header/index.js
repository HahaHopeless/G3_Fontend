import styles from './styles';

import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Header, StyleProvider, Left, Right} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import green from '../../../native-base-theme/variables/variables';
const AppHeader = () => {
  return (
    <StyleProvider style={getTheme(green)}>
      <Header>
        <Left>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/menu.png')}
              style={{tintColor: 'white', width: 30, height: 30}}
            />
          </TouchableOpacity>
        </Left>
        <Right></Right>
      </Header>
    </StyleProvider>
  );
};

export default AppHeader;
