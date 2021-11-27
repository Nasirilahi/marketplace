import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './ButtonStyles'

interface ButtonProps {
  onPress?: (e: {stopPropagation: () => void; persist: () => void}) => void;
  text?: string;
}
const Button = ({onPress, text}: ButtonProps) => {
  const button = (
    <View style={styles.container}>
      {!!text && (
        <Text numberOfLines={1} style={styles.buttonText}>
          {text}
        </Text>
      )}
    </View>
  );
  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={1}
      underlayColor="transparent">
      {button}
    </TouchableHighlight>
  );
};

export default Button;
