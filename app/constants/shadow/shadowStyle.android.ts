import { ViewStyle } from 'react-native';
import { ShadowType } from './shadowType';

const shadowStyle: Record<ShadowType, ViewStyle> = {
  [ShadowType.ELEVATION_2]: {
    elevation: 2,
  },
  [ShadowType.ELEVATION_4]: {
    elevation: 4,
  },
  [ShadowType.ELEVATION_6]: {
    elevation: 6,
  },
  [ShadowType.ELEVATION_8]: {
    elevation: 8,
  },
};

export default shadowStyle;
