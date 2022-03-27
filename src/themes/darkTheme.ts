import {
  darkBackgroundColors,
  darkBrandColors,
  darkTextColors,
  darkUIColors,
} from '../themes/colors';
import {fonts, fontSizes, lineHeights} from '../themes/fonts';

export const darkTheme = {
  colors: {
    brand: {
      ...darkBrandColors,
    },
    ui: {
      ...darkUIColors,
    },
    text: {
      ...darkTextColors,
    },
    background: {
      ...darkBackgroundColors,
    },
  },
  fonts: {
    fontSizes,
    fonts,
    lineHeights,
  },
  dark: true,
};
