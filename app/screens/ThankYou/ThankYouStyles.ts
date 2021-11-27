import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const {GRC3, GRC1} = Colors;

const styles = StyleSheet.create({
  emptyContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {width: 158, height: 128},
  emptyText: {
    textAlign: 'center',
    color: GRC1,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emptySubText: {
    textAlign: 'center',
    color: GRC3,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 40,
  },
});

export default styles;
