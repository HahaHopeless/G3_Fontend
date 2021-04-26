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

const SignUpScreen = ({navigation}) => {
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
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// headerTitleStyle: {
//   fontFamily: global_variables.fonts.semibold,
//   color: 'white',
// },
// headerTitleAlign: 'center',

export default SignUpScreen;
