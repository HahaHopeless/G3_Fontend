import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const global_variables = {
  fonts: {
    light: 'OpenSans-Light',
    regular: 'OpenSans-Regular',
    semibold: 'OpenSans-SemiBold',
    bold: 'OpenSans-Bold',
    black: 'OpenSans-ExtraBold',
  },
  dimensions: {
    deviceWidth: width,
    deviceWeight: height,
  },
};

export default global_variables;
