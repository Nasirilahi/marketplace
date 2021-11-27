import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const {GRO3, GRC9} = Colors;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GRO3,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: GRC9,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
