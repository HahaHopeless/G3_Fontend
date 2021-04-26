import styles from './styles';
import {grocers} from '../../../dummyData';
import React from 'react';
import {View, ScrollView} from 'react-native';
import Grid from 'react-native-grid-component';
import GrocerItem from '../../components/GrocerItem';
import AppFooter from '../../components/Footer';

const GrocerScreen = () => {
  const renderItem = (data, i) => (
    <GrocerItem label={data.label} image={data.image} key={i} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.scrollViewContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Grid
            renderItem={(data, i) => renderItem(data, i)}
            data={grocers}
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

export default GrocerScreen;
