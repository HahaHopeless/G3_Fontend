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
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBig: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  btnBigText: {
    color: global_variables.colors.white,
    fontSize: 20,
    fontFamily: global_variables.fonts.bold,
  },
  btnBigImage: {
    tintColor: 'white',
    position: 'absolute',
    right: '5%',
    width: 65,
    height: 65,
    overflow: 'hidden',
    opacity: 0.3,
  },
  card: {
    padding: '10%',
    position: 'absolute',
    bottom: responsiveHeight(5),
    backgroundColor: 'white',
    width: responsiveWidth(90),
    alignItems: 'center',
    borderRadius: 20,
  },
  headerTitle: {
    color: 'white',
    fontFamily: global_variables.fonts.bold,
    fontSize: 24,
  },
  picker: {
    backgroundColor: global_variables.colors.lightGrey,
    borderRadius: 20,
    padding: '5%',
  },
});

export default styles;
