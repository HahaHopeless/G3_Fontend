import global_variables from '../../../global_variables';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  icon: {
    width: 30,
    height: 30,
    tintColor: '#57606f',
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
    backgroundColor: 'rgba(57, 207, 157, 0.8)',
    height: '12%',
    borderRadius: 15,
    flexDirection: 'row',
    marginVertical: '2%',
  },
  btnBigText: {
    color: '#2f3542',
    fontSize: 20,
    zIndex: 2,
    fontFamily: global_variables.fonts.bold,
  },
  btnBigImage: {
    tintColor: 'rgba(57, 207, 157, 0.7)',
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
    fontSize: 28,
    marginBottom: '4%',
    color: '#2f3542',
    textAlign: 'center',
    fontFamily: global_variables.fonts.bold,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(57, 207, 157, 0.7)',
  },
  availableBalance: {
    color: '#2f3542',
    fontFamily: global_variables.fonts.regular,
  },
  cash: {
    fontSize: 40,
    color: '#2f3542',
    fontFamily: global_variables.fonts.semibold,
  },
});

export default styles;
