import styles from './styles';

import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import TextField from '../../components/TextField';

const SignUpScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/img/logo.png')}
        />
        <View style={styles.glass}>
          <Image
            style={styles.leaves}
            source={require('../../assets/img/leaves.png')}
          />
        </View>
        <View style={styles.card}>
          <TextField label="Name" />
          <TextField label="Email" />
          <TextField label="Phone" />
          <TextField label="Password" />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
