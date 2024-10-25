import {Dimensions, Platform, PixelRatio} from 'react-native';
/*height: SCREEN_HEIGHT*/
const {width: SCREEN_WIDTH, fontScale} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;

/**
 * It takes a size in pixels, multiplies it by the scale factor, and returns the result
 * @returns the size of the font.
 */
const normalize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export default normalize;
