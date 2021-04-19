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

const LoginScreen = () => {
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
          <TextField label="Email or Phone" />
          <TextField label="Password" />
          <TouchableOpacity style={styles.forgotPass}>
            <Text
              style={{
                color: 'rgba(57, 207, 157, 1)',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={{color: 'white', fontSize: 18}}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Text style={{color: '#a4b0be'}}>Dont have an Account?</Text>
            <TouchableOpacity>
              <Text style={{color: 'rgba(57, 207, 157, 1)'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
