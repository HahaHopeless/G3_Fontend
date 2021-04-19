import styles from './styles';

import React from 'react';
import {View, Text, TextInput} from 'react-native';

const TextField = ({label, extra}) => {
  return (
    <View style={styles.textboxContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.textbox}>
        <TextInput
          style={{padding: 12, fontSize: 18}}
          onFocus={() => console.log('focused')}
          onBlur={() => console.log('blurred')}
        />
      </View>
    </View>
  );
};

export default TextField;
