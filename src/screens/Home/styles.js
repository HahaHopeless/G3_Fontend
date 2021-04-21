import global_variables from '../../../global_variables';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
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
    backgroundColor: global_variables.colors.mediumgreen,
    height: '15%',
    borderRadius: 15,
    flexDirection: 'row',
    marginVertical: '2%',
    position: 'absolute',
    bottom: '2%',
  },
  btnBigText: {
    color: global_variables.colors.grey,
    fontSize: 20,
    zIndex: 2,
    fontFamily: global_variables.fonts.bold,
  },
  btnBigImage: {
    tintColor: global_variables.colors.green,
    position: 'absolute',
    right: 18,
    width: 70,
    height: 70,
    overflow: 'hidden',
  },
  userInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%',
  },
  name: {
    height: 68,
    fontSize: 34,
    marginBottom: '4%',
    color: global_variables.colors.grey,
    textAlign: 'center',
    fontFamily: global_variables.fonts.bold,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: global_variables.colors.green,
  },
  availableBalance: {
    color: global_variables.colors.grey,
    fontFamily: global_variables.fonts.regular,
  },
  cash: {
    fontSize: 40,
    color: global_variables.colors.grey,
    fontFamily: global_variables.fonts.semibold,
  },
});

export default styles;
