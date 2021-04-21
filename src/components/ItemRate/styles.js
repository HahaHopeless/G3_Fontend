import global_variables from '../../../global_variables';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    tintColor: 'white',
    margin: '5%',
  },
  circleGreen: {
    backgroundColor: global_variables.colors.green,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%',
  },
  label: {
    fontFamily: global_variables.fonts.regular,
  },
  price: {
    fontSize: 18,
    fontFamily: global_variables.fonts.regular,
  },
});

export default styles;
