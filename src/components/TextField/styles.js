import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  textboxContainer: {
    width: (width / 100) * 95,
    padding: '2%',
  },
  textbox: {
    marginVertical: '2%',
    borderWidth: 1,
    borderColor: 'rgba(164, 176, 190,0.5)',
    borderRadius: 10,
  },
  textboxFocused: {
    marginVertical: '2%',
    borderWidth: 1,
    borderColor: 'rgba(57, 207, 157, 1)',
    borderRadius: 10,
  },
  inputLabel: {
    color: '#a4b0be',
  },
});

export default styles;
