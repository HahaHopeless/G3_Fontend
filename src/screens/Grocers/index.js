import styles from './styles';
import {grocers} from '../../../dummyData';
import React from 'react';
import {View, ScrollView} from 'react-native';
import Grid from 'react-native-grid-component';
import GrocerItem from '../../components/GrocerItem';

const GrocerScreen = ({navigation}) => {
  const renderItem = (data, i) => (
    <GrocerItem label={data.label} image={data.image} key={i} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.scrollViewContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Grid
              renderItem={(data, i) => renderItem(data, i)}
              data={grocers}
              numColumns={2}
            />
          </View>
        </ScrollView>
      </View>
      <View></View>
    </View>
  );
};

export default GrocerScreen;
