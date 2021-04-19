import {StyleSheet, Dimension} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  img: {
    width: 80,
    height: 80,
    tintColor: 'white',
  },
  circleGreen: {
    backgroundColor: 'rgba(57, 207, 157, 1)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: '2%',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default styles;
