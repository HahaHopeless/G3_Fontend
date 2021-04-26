import global_variables from '../../../global_variables';
import {StyleSheet, Dimensions} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: global_variables.colors.white,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: global_variables.colors.grey,
  },
  footer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBig: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '12%',
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
    fontSize: 24,
    zIndex: 2,
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
  userInfo: {
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
    width: '90%',
    height: '40%',
    marginVertical: '6%',
    padding: '5%',
  },
  name: {
    height: 68,
    fontSize: 28,
    color: global_variables.colors.grey,
    textAlign: 'center',
    fontFamily: global_variables.fonts.bold,
    flex: 1,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: global_variables.colors.green,
  },
  availableBalance: {
    color: global_variables.colors.lightGrey,
    fontFamily: global_variables.fonts.regular,
  },
  cash: {
    fontSize: 50,
    color: global_variables.colors.grey,
    fontFamily: global_variables.fonts.semibold,
  },
  profilepic: {
    width: 80,
    height: 80,
    maxHeight: 80,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  profilepicContainer: {
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
    marginTop: '-10%',
  },
  transactionHistory: {
    color: global_variables.colors.green,
    paddingTop: '2%',
  },
});

export default styles;
