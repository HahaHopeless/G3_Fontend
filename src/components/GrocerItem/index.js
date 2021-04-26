import styles from './styles';
import global_variables from '../../../global_variables';

import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GrocerItem = ({image, label, price}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          global_variables.greenGradient.color1,
          global_variables.greenGradient.color2,
        ]}
        style={{borderRadius: 100}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.circleGreen}>
          <Image style={styles.img} source={image} />
        </View>
      </LinearGradient>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.price}>Rs.{price}/KG</Text>
    </View>
  );
};

export default GrocerItem;
