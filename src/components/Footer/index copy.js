import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Footer, FooterTab, Button, StyleProvider, Text} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import green from '../../../native-base-theme/variables/variables';
import styles from './styles';
const AppFooter = () => {
  return (
    <StyleProvider style={getTheme(green)}>
      <FooterTab>
        <Button vertical>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/scan.png')}
          />
          <Text style={{color: '#57606f', fontSize: 10}}>Scan</Text>
        </Button>
        <Button vertical>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/rates.png')}
          />
          <Text style={{color: '#57606f', fontSize: 10}}>Rates</Text>
        </Button>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            borderColor: 'white',
            borderWidth: 5,
            height: 70,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          vertical>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/sell.png')}
          />
          <Text style={{color: '#57606f', fontSize: 10}}>Sell</Text>
        </TouchableOpacity>
        <Button vertical>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/grocers.png')}
          />
          <Text style={{color: '#57606f', fontSize: 10}}>Grocers</Text>
        </Button>
        <Button vertical>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/share.png')}
          />
          <Text style={{color: '#57606f', fontSize: 10}}>Share</Text>
        </Button>
      </FooterTab>
    </StyleProvider>
  );
};

export default AppFooter;
