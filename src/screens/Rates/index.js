import styles from './styles';

import React from 'react';
import {View, ScrollView} from 'react-native';
import Grid from 'react-native-grid-component';
import ItemRate from '../../components/ItemRate';
import AppHeader from '../../components/Header';
import AppFooter from '../../components/Footer';

const RateScreen = () => {
  const items = [
    {
      image: require('../../assets/items/bio.png'),
      price: 4,
      label: 'Bio',
    },
    {
      image: require('../../assets/items/bulb.png'),
      price: 15,
      label: 'Bulb',
    },
    {
      image: require('../../assets/items/cardboard.png'),
      price: 8,
      label: 'Cardboard',
    },
    {
      image: require('../../assets/items/electronic.png'),
      price: 15,
      label: 'Electronics',
    },
    {
      image: require('../../assets/items/glass.png'),
      price: 5,
      label: 'Glass',
    },
    {
      image: require('../../assets/items/metal.png'),
      price: 10,
      label: 'Metal',
    },
    {
      image: require('../../assets/items/paper.png'),
      price: 12,
      label: 'Paper',
    },
    {
      image: require('../../assets/items/plastic.png'),
      price: 20,
      label: 'Plastic',
    },
    {
      image: require('../../assets/items/misc.png'),
      price: 2,
      label: 'Misc',
    },
  ];

  const renderItem = (data, i) => (
    <ItemRate
      label="Metal"
      label={data.label}
      price={data.price}
      image={data.image}
      key={i}
    />
  );

  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.scrollViewContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Grid
            renderItem={(data, i) => renderItem(data, i)}
            data={items}
            numColumns={2}
          />
        </ScrollView>
      </View>
      <View>
        <AppFooter />
      </View>
    </View>
  );
};

export default RateScreen;
