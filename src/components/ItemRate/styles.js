import global_variables from '../../../global_variables';
import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    tintColor: 'white',
    margin: '5%',
  },
  circleGreen: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveHeight(3),
  },
  label: {
    fontFamily: global_variables.fonts.regular,
  },
  price: {
    fontSize: 18,
    fontFamily: global_variables.fonts.semibold,
  },
});

export default styles;
