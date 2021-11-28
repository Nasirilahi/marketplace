import {Animated} from 'react-native';
import {Colors} from '../../constants';
import {IconFonts} from '../../constants';
import {IconSize} from '../../constants';

export type IconProps = UIProps;

interface UIProps {
  icon: IconFonts;
  iconColor?: Colors | Animated.Value | Animated.AnimatedInterpolation;
  iconSize: IconSize;
}
