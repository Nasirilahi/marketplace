import {StyleSheet, TextStyle} from 'react-native';
import {IconProps as Props} from './types';

const iconStyle = (props: Props): {icon: TextStyle} =>
  StyleSheet.create({
    icon: {
      fontSize: props.iconSize,
      lineHeight: props.iconSize,
    },
  });

export default iconStyle;
