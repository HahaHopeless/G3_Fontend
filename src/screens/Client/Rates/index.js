import styles from './styles';

import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import ItemRate from '../../../components/ItemRate';
import AppHeader from '../../../components/Header';
import AppFooter from '../../../components/Footer';

const RateScreen = () => {
  return (
    <View style={{height: '100%'}}>
      <AppHeader />
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.row}>
            <ItemRate
              label="Bio"
              price={10}
              image={require('../../../assets/items/bio.png')}
            />
            <ItemRate
              label="Bulb"
              price={15}
              image={require('../../../assets/items/bulb.png')}
            />
          </View>
          <View style={styles.row}>
            <ItemRate
              label="Electronics"
              price={30}
              image={require('../../../assets/items/electronic.png')}
            />
            <ItemRate
              label="Metal"
              price={20}
              image={require('../../../assets/items/metal.png')}
            />
          </View>
          <View style={styles.row}>
            <ItemRate
              label="Electronics"
              price={30}
              image={require('../../../assets/items/electronic.png')}
            />
            <ItemRate
              label="Metal"
              price={20}
              image={require('../../../assets/items/metal.png')}
            />
          </View>
        </ScrollView>
      </View>
      <View>
        <AppFooter />
      </View>
    </View>
  );
};

export default RateScreen;
