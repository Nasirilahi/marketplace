import React, {useEffect, useRef} from 'react';
import {
  View,
  Animated,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from '../Icon';
import {IconSize} from '../../constants';
import {buttonAnimationDuration} from './constants';
import {usePrevious} from '../../hooks/usePrevious';
import addToCartButtonStyles, {
  getAnimatedStyles,
  getColorInterpolations,
} from './AddToCartStyles';
import {AddToCartTinyButtonTypes as Props} from './types';

const AddToCartTinyButton = (props: Props): React.ReactElement => {
  const atcAnimatedValue = useRef(new Animated.Value(0));
  const prevItemsInCart = usePrevious(props.currentItemsInCart);
  const isProductInCart = (props.currentItemsInCart ?? 0) > 0;
  const wasProductInCart = (prevItemsInCart ?? 0) > 0;
  const isProductAdded = !wasProductInCart && isProductInCart;
  const isProductRemoved = wasProductInCart && !isProductInCart;

  useEffect(() => {
    if (isProductAdded) {
      Animated.timing(atcAnimatedValue.current, {
        toValue: 1,
        duration: buttonAnimationDuration,
        useNativeDriver: false,
      }).start();
    }
    if (isProductRemoved) {
      Animated.timing(atcAnimatedValue.current, {
        toValue: 0,
        duration: buttonAnimationDuration,
        useNativeDriver: false,
      }).start();
    }
  }, [isProductAdded, isProductRemoved]);
  const styles = addToCartButtonStyles(props.isDesktop);
  const animatedStyles = getAnimatedStyles(
    atcAnimatedValue.current,
    props.isDesktop,
  );
  const colorInterpolations = getColorInterpolations(atcAnimatedValue.current);

  return (
    <Animated.View style={styles.productContainer}>
      <View style={styles.buttonBackgroundContainer}>
        <Animated.View
          style={[
            styles.buttonBackgroundTile,
            animatedStyles.buttonBackgroundTile,
          ]}
        />
      </View>
      <TouchableHighlight
        onPress={props.onRemove}
        activeOpacity={0.6}
        underlayColor="transparent"
        hitSlop={{right: 20}}>
        <Animated.View style={animatedStyles.productIconLeftContainer}>
          <View style={styles.productIconLeftContainer}>
            <Icon
              icon={'-'}
              iconSize={
                props.isDesktop ? IconSize.SIZE_28X28 : IconSize.SIZE_20X20
              }
              iconColor={colorInterpolations.productIconLeft}
            />
          </View>
        </Animated.View>
      </TouchableHighlight>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.quantityTextContainer,
            animatedStyles.quantityTextContainer,
          ]}>
          <Animated.Text
            style={[styles.quantityText, animatedStyles.quantityText]}>
            {props.currentItemsInCart}
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableHighlight
        onPress={props.onAdd}
        activeOpacity={0.6}
        underlayColor="transparent"
        hitSlop={{left: 20}}>
        <Animated.View style={styles.productIconRightContainer}>
          <Icon
            icon={'+'}
            iconSize={
              props.isDesktop ? IconSize.SIZE_28X28 : IconSize.SIZE_20X20
            }
            iconColor={colorInterpolations.productIconRight}
          />
        </Animated.View>
      </TouchableHighlight>
    </Animated.View>
  );
};

export default AddToCartTinyButton;
