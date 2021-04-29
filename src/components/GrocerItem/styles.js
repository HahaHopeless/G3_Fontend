import global_variables from '../../../global_variables';
import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    width: responsiveWidth(40),
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(2),
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: '2%',
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12%',
    borderRadius: 20,
  },
  label: {
    fontFamily: global_variables.fonts.semibold,
  },
});

export default styles;
