import styles from './styles';
import global_variables from '../../../global_variables';
import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Item, Picker, Icon, Input} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

const SellScreen = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selected, setSelected] = useState('key1');
  const [date, SetDate] = useState(moment(new Date()).format('MMMM Do YYYY'));
  const [timeSlot, setTimeSlot] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    SetDate(moment(date).format('MMMM Do YYYY'));
    hideDatePicker();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Item
          rounded
          style={{
            width: '100%',
            position: 'absolute',
            top: 0,
            zIndex: 9999,
            backgroundColor: 'white',
          }}>
          <Icon active name="search" style={{marginLeft: '5%'}} />
          <Input placeholder="Search Map" />
        </Item>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        />
        <View style={styles.card}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity onPress={showDatePicker} style={styles.picker}>
              <Text>{`Date : ${date}`}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
              style={{zIndex: 99999}}
            />
            <Picker
              style={styles.picker}
              placeholder="Select Timeslot"
              placeholderStyle={{color: '#bfc6ea'}}
              selectedValue={selected}
              onValueChange={val => {
                setSelected(val);
                console.log(val);
              }}>
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnBig}
              onPress={() =>
                console.log(`Request Placed Time:${time}, Date:${date}`)
              }>
              <LinearGradient
                colors={[
                  global_variables.greenGradient.color1,
                  global_variables.greenGradient.color2,
                ]}
                style={{
                  borderRadius: 20,
                  height: '100%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={styles.btnBigText}>Place Request</Text>
                <Image
                  style={styles.btnBigImage}
                  source={require('../../assets/icons/truck.png')}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SellScreen;
