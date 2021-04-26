import global_variables from '../../../global_variables';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  circleGreen: {
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
    fontFamily: global_variables.fonts.semibold,
  },
});

export default styles;
