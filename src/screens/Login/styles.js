import global_variables from '../../../global_variables';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: global_variables.colors.green,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    flex: 1,
  },
  logo: {
    resizeMode: 'contain',
    // maxHeight: (global_variables.dimensions.deviceHeight / 100) * 16,
    height: responsiveHeight(16),
    tintColor: 'white',
    position: 'absolute',
    top: responsiveHeight(8),
  },
  textboxContainer: {
    width: responsiveWidth(90),
    padding: '2%',
  },
  btn: {
    width: responsiveWidth(90),
    backgroundColor: global_variables.colors.green,
    padding: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#20bf6b',
    shadowOffset: {
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 20,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: global_variables.dimensions.deviceWidth,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    bottom: 0,
    paddingVertical: responsiveHeight(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    zIndex: 2,
  },
  glass: {
    height: 150,
    width: responsiveWidth(100),
    backgroundColor: 'rgba(255,255,255,0.3)',
    position: 'absolute',
    top: responsiveHeight(28),
    borderRadius: 50,
    borderColor: 'rgba(255,255,255,0.35)',
    borderWidth: 1,
  },
  leaves: {
    height: responsiveHeight(40),
    width: global_variables.dimensions.deviceWidth,
    resizeMode: 'contain',
    marginTop: responsiveHeight(-18),
    opacity: 0.7,
  },
  forgotPass: {
    width: responsiveWidth(90),
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginBottom: '10%',
  },
  forgotPassword: {
    color: global_variables.colors.green,
  },
  noAccount: {
    color: global_variables.colors.lightGrey,
  },
  signup: {
    color: global_variables.colors.green,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
});

export default styles;
