import React from 'react';
import {Animated} from 'react-native';
import {IconProps as Props} from './types';
import {default as styles} from './IconStyles';

const Icon = (props: Props): React.ReactElement => {
  const iconStyles = styles(props);
  return (
    <Animated.Text
      allowFontScaling={false}
      style={[iconStyles.icon, {color: props.iconColor}]}>
      {props.icon}
    </Animated.Text>
  );
};

export default Icon;
