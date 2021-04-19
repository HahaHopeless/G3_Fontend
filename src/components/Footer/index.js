import styles from './styles';

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const AppFooter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/scan.png')}
        />
        <Text style={styles.btnText}>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/rates.png')}
        />
        <Text style={styles.btnText}>Rates</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/sell.png')}
        />
        <Text style={styles.btnText}>Sell Trash</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/grocers.png')}
        />
        <Text style={styles.btnText}>Grocers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/share.png')}
        />
        <Text style={styles.btnText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppFooter;
