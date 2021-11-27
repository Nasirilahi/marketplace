import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const {GRC1, GRC4, GRC9} = Colors;

const styles = StyleSheet.create({
  atcButton: {display: 'flex', justifyContent: 'center'},
  seperator: {
    height: 1,
    backgroundColor: Colors.GRC5,
  },
  headerContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  merchantContainer: {
    borderBottomColor: GRC4,
    backgroundColor: GRC9,
    borderBottomWidth: 0.5,
    padding: 16,
  },
  deliveryETA: {fontSize: 16, fontWeight: 'bold', marginBottom: 5},
  merchantBy: {fontSize: 12, fontWeight: 'bold', color: Colors.GRC3},
  footerContainer: {marginTop: 15, backgroundColor: GRC9, padding: 16},
  billDetailsLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.GRC2,
  },
  mrpContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  totalLabel: {
    fontSize: 15,
    color: GRC1,
    fontWeight: 'bold',
  },
});

export default styles;
