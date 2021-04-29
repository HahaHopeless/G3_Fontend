import styles from './styles';
import {items} from '../../../dummyData';
import React from 'react';
import {View, ScrollView} from 'react-native';
import Grid from 'react-native-grid-component';
import ItemRate from '../../components/ItemRate';

const RateScreen = ({navigation}) => {
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
      {/* <AppHeader /> */}
      <View style={styles.scrollViewContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Grid
            renderItem={(data, i) => renderItem(data, i)}
            data={items}
            numColumns={2}
          />
        </ScrollView>
      </View>
      <View></View>
    </View>
  );
};

export default RateScreen;
