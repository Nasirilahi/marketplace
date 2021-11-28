import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.GRC5,
    borderRadius: 4,
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
});

export default styles;
