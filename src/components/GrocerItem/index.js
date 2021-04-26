import styles from './styles';

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GrocerItem = ({image, label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.circleGreen}>
        <Image style={styles.img} source={image} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default GrocerItem;
