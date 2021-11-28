import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.GRC9,
    paddingBottom: 20,
    paddingTop: 20,
  },
  imageContainer: {height: 44, width: 44, marginRight: 10},
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.GRC2,
    marginBottom: 10,
  },
  atcContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  totalPriceContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  totalPricetage: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.GRC2,
  },
  categoryTag: {fontWeight: 'bold', fontSize: 12, color: Colors.GRC3},
});

export default styles;
