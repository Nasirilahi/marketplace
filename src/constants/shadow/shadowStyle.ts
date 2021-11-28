import {ViewStyle} from 'react-native';
import {ShadowType} from './shadowType';
import {ShadowColor} from './shadowColor';

const shadowStyle: Record<ShadowType, ViewStyle> = {
  [ShadowType.ELEVATION_2]: {
    shadowColor: ShadowColor.DEFAULT,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.08,
  },
  [ShadowType.ELEVATION_4]: {
    shadowColor: ShadowColor.DEFAULT,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.16,
  },
  [ShadowType.ELEVATION_6]: {
    shadowColor: ShadowColor.DEFAULT,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.16,
  },
  [ShadowType.ELEVATION_8]: {
    shadowColor: ShadowColor.DEFAULT,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
  },
};

export default shadowStyle;
