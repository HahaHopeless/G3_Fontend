import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(57, 207, 157, 1)',
    height: '100%',
  },
  logo: {
    resizeMode: 'contain',
    maxHeight: (height / 100) * 16,
    tintColor: 'white',
    position: 'absolute',
    top: '8%',
  },
  textboxContainer: {
    width: (width / 95) * 100,
    padding: '2%',
  },
  btn: {
    width: '95%',
    backgroundColor: 'rgba(57, 207, 157, 1)',
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
    width: width,
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
    top: '30%',
    borderRadius: 50,
    borderColor: 'rgba(255,255,255,0.35)',
    borderWidth: 1,
  },
  leaves: {
    height: '200%',
    width: width,
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
});

export default styles;
