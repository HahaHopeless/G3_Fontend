import global_variables from '../../../global_variables';

import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: responsiveWidth(100),
  },
});

export default styles;
