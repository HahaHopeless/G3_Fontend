import global_variables from '../../../global_variables';
import React from 'react';
import {TouchableOpacity, Image, Platform} from 'react-native';

const MenuButton = () => {
  return (
    <Image
      source={require('../../../src/assets/icons/menu.jpeg')}
      style={{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: global_variables.greenGradient.color2,
        marginHorizontal: 10,
        scaleX: Platform.OS === 'android' ? 1 : -1,
      }}
    />
  );
};
export default MenuButton;
