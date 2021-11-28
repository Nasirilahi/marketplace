import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

const {GRO3, GRC9, GRC5, GRC1} = Colors;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  logoImage: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: GRO3,
    borderWidth: 0,
    color: GRC9,
    borderColor: GRC5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: GRC9,
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: GRC1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: GRO3,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default styles;
