import styles from './styles';

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GrocerItem = ({image, label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={image} />
      </View>
    </TouchableOpacity>
  );
};

export default GrocerItem;
