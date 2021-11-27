import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const {GRC9, GRC1} = Colors;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    paddingTop: 30,
    marginBottom: 40,
    backgroundColor: GRC9,
    shadowColor: GRC1,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    color: Colors.GRC1,
    fontWeight: 'bold',
  },
  countLabelContainer:{
    position: 'absolute',
    backgroundColor: 'red',
    width: 16,
    height: 16,
    borderRadius: 15 / 2,
    right: -5,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countLabel: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: 8,
  },
});

export default styles;
