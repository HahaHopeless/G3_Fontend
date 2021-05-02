import styles from './styles';
import global_variables from '../../../global_variables';
import React from 'react';
import {
  Container,
  Footer,
  Content,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';
import {Image} from 'react-native';

const FooterTabs = ({navigation, state}) => {
  let index = navigation.state.index;

  return (
    <Footer>
      <FooterTab style={{backgroundColor: 'rgba(255,255,255,1)'}}>
        <Button onPress={() => navigation.navigate('Home')}>
          <Image
            source={
              index === 0
                ? require('../../assets/icons/active/home.png')
                : require('../../assets/icons/home.png')
            }
            style={styles.icon}
          />
          <Text
            style={{
              color:
                index === 0
                  ? global_variables.colors.green
                  : global_variables.colors.lightGrey,
              fontFamily:
                index === 0
                  ? global_variables.fonts.bold
                  : global_variables.fonts.regular,
            }}>
            Home
          </Text>
        </Button>
        <Button onPress={() => navigation.navigate('Rates')}>
          <Image
            source={
              index === 1
                ? require('../../assets/icons/active/rates.png')
                : require('../../assets/icons/rates.png')
            }
            style={styles.icon}
          />
          <Text
            style={{
              color:
                index === 1
                  ? global_variables.colors.green
                  : global_variables.colors.lightGrey,
              fontFamily:
                index === 1
                  ? global_variables.fonts.bold
                  : global_variables.fonts.regular,
            }}>
            Rates
          </Text>
        </Button>
        <Button onPress={() => navigation.navigate('Sell')}>
          <Image
            source={
              index === 2
                ? require('../../assets/icons/active/sell.png')
                : require('../../assets/icons/sell.png')
            }
            style={styles.icon}
          />
          <Text
            style={{
              color:
                index === 2
                  ? global_variables.colors.green
                  : global_variables.colors.lightGrey,
              fontFamily:
                index === 2
                  ? global_variables.fonts.bold
                  : global_variables.fonts.regular,
            }}>
            Sell
          </Text>
        </Button>
        <Button onPress={() => navigation.navigate('Shops')}>
          <Image
            source={
              index === 3
                ? require('../../assets/icons/active/grocers.png')
                : require('../../assets/icons/grocers.png')
            }
            style={styles.icon}
          />
          <Text
            style={{
              color:
                index === 3
                  ? global_variables.colors.green
                  : global_variables.colors.lightGrey,
              fontFamily:
                index === 3
                  ? global_variables.fonts.bold
                  : global_variables.fonts.regular,
            }}>
            Shops
          </Text>
        </Button>
        <Button onPress={() => navigation.navigate('Scan')}>
          <Image
            source={
              index === 4
                ? require('../../assets/icons/active/scan.png')
                : require('../../assets/icons/scan.png')
            }
            style={styles.icon}
          />
          <Text
            style={{
              color:
                index === 4
                  ? global_variables.colors.green
                  : global_variables.colors.lightGrey,
              fontFamily:
                index === 4
                  ? global_variables.fonts.bold
                  : global_variables.fonts.regular,
            }}>
            Scan
          </Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterTabs;
