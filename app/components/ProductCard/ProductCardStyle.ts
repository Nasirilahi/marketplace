import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const {GRC1, GRC3, GRG3, GRC4} = Colors;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginBottom: 20,
    flexDirection: 'row',
  },
  thumnailContainer: {
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  productThumbnail: {
    borderRadius: 5,
    width: 65,
    height: 65,
  },
  descriptionContainer: {
    flex: 1,
  },
  descriptionTitle: {
    fontSize: 14,
    color: GRC1,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  descriptionSubTile: {
    fontSize: 10,
    color: GRC3,
    marginBottom: 5,
  },
  descriptionPrice: {
    fontSize: 12,
    color: GRC1,
    fontWeight: 'bold',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: GRG3,
    marginRight: 5,
  },
  starRating: {
    fontSize: 12,
    color: GRG3,
    marginRight: 2,
    fontWeight: 'bold',
  },
  ratingCount: {
    fontSize: 8,
    color: GRC4,
    fontWeight: 'bold',
  },
});

export default styles;
