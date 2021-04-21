import global_variables from '../../../global_variables';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: global_variables.colors.green,
    height: '100%',
  },
  logo: {
    resizeMode: 'contain',
    maxHeight: (global_variables.dimensions.deviceHeight / 100) * 12,
    tintColor: 'white',
    position: 'absolute',
    top: '5%',
  },
  textboxContainer: {
    width: (global_variables.dimensions.deviceWidth / 95) * 100,
    padding: '2%',
  },
  btn: {
    width: '95%',
    backgroundColor: global_variables.colors.green,
    padding: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20,
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
    paddingHorizontal: 10,
    paddingVertical: 20,
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
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    position: 'absolute',
    top: '20%',
    borderRadius: 50,
    borderColor: 'rgba(255,255,255,0.35)',
    borderWidth: 1,
  },
  leaves: {
    height: '200%',
    width: global_variables.dimensions.deviceWidth,
    resizeMode: 'contain',
    marginTop: '-30%',
    opacity: 0.7,
  },
  forgotPass: {
    width: '90%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginBottom: '10%',
  },
  signup: {
    color: 'white',
    fontSize: 18,
  },
});

export default styles;
