import {Animated, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors, Radius, Shadow, Spacing} from '../../constants';

const addToCartButtonStyles = (isDesktop?: boolean) =>
  StyleSheet.create({
    touchableLeftContainer: {
      paddingVertical: Spacing.SPACER_8,
      paddingRight: Spacing.SPACER_8,
    },
    touchableRightContainer: {
      paddingVertical: Spacing.SPACER_8,
      paddingLeft: Spacing.SPACER_8,
    },
    noProductContainer: {
      maxHeight: isDesktop ? 36 : 28,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    noProductIconContainer: {
      backgroundColor: Colors.GRC9,
      padding: Spacing.SPACER_4,
      borderRadius: Radius.RADIUS_4,
      ...Shadow.elevation_2,
    },
    productContainer: {
      minWidth: isDesktop ? 132 : 96,
      maxHeight: isDesktop ? 36 : 28,
      position: 'relative',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: Radius.RADIUS_4,
      zIndex: 0,
    },
    buttonBackgroundContainer: {
      position: 'absolute',
      left: 0,
      width: isDesktop ? 132 : 96,
      height: isDesktop ? 36 : 28,
      borderRadius: 4,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      zIndex: -1,
    },
    buttonBackgroundTile: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      height: '100%',
      borderRadius: 4,
    },
    productIconLeftContainer: {
      width: isDesktop ? 36 : 28,
      height: isDesktop ? 36 : 28,
      justifyContent: 'center',
      alignItems: 'center',
    },
    productIconRightContainer: {
      width: isDesktop ? 36 : 28,
      height: isDesktop ? 36 : 28,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Radius.RADIUS_4,
      right: 6,
    },
    quantityTextContainer: {
      width: 20,
      height: isDesktop ? 36 : 28,
      marginHorizontal: Spacing.SPACER_4,
      paddingVertical: Spacing.SPACER_4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantityText: {
      color: Colors.GRC9,
    },
  });

export const getAnimatedStyles = (
  animatedValue: Animated.Value,
  isDesktop?: boolean,
): Record<string, Animated.WithAnimatedObject<ViewStyle | TextStyle>> => ({
  buttonBackgroundTile: {
    width: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: isDesktop ? [36, 132] : [28, 96],
    }),
    backgroundColor: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(255, 255, 255, 1)', 'rgba(233, 97, 37, 1)'],
    }),
    borderColor: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(238,238,238, 1)', 'rgba(233, 97, 37, 1)'],
    }),
  },
  productIconLeftContainer: {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          extrapolate: 'clamp',
          outputRange: [120, 0],
        }),
      },
    ],
  },
  quantityTextContainer: {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0.5, 1],
          extrapolate: 'clamp',
          outputRange: [96 - 62, 0],
        }),
      },
    ],
  },
  quantityText: {
    color: animatedValue.interpolate({
      inputRange: [0.7, 1],
      extrapolate: 'clamp',
      outputRange: ['rgba(255,255,255, 0)', 'rgba(255,255,255, 1)'],
    }),
  },
});

export const getColorInterpolations = (
  animatedValue: Animated.Value,
): Record<string, Animated.AnimatedInterpolation> => ({
  productIconLeft: animatedValue.interpolate({
    inputRange: [0.7, 1],
    extrapolate: 'clamp',
    outputRange: ['rgba(255,255,255, 0)', 'rgba(255,255,255, 1)'],
  }),
  productIconRight: animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(233,97,37, 1)', 'rgba(255,255,255, 1)'],
  }),
});

export default addToCartButtonStyles;
