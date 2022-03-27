import {
  backgroundColors,
  brandColors,
  textColors,
  UIColors,
} from '../themes/colors';
import {fonts, fontSizes, lineHeights} from '../themes/fonts';

export const theme = {
  colors: {
    brand: {
      ...brandColors,
    },
    ui: {
      ...UIColors,
    },
    text: {
      ...textColors,
    },
    background: {
      ...backgroundColors,
    },
  },
  fonts: {
    fontSizes,
    fonts,
    lineHeights,
  },
  dark: false,
};
