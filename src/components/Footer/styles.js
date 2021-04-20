import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: '2%',
    justifyContent: 'space-around',
    borderTopColor: 'rgba(87, 96, 111, 0.1)',
    borderRightColor: 'rgba(0,0,0,0)',
    borderLeftColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
  },
  icon: {
    width: 35,
    height: 35,
    tintColor: 'rgba(57, 207, 157, 1)',
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
  btnText: {
    color: '#57606f',
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },
});

export default styles;
