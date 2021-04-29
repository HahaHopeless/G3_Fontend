import styles from './styles';
import global_variables from '../../../global_variables';
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

const LoginScreen = ({navigation}) => {
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
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Tabs')}>
            <Text style={{color: 'white', fontSize: 18}}>Login</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.noAccount}>Dont have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signup}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
