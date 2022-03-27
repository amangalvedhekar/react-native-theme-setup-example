import 'styled-components';

export interface ComponentTheme {
  colors: {
    background: Record<'main' | 'secondary', string>;
    brand: Record<'primary' | 'secondary' | 'accent' | 'muted', string>;
    text: Record<
      'primary' | 'secondary' | 'disabled' | 'inverse' | 'error' | 'success',
      string
    >;
    ui: Record<
      'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'error' | 'success',
      string
    >;
  };
  fonts: {
    fontSizes: number[];
    fonts: Record<'regular' | 'medium' | 'light' | 'thin' | 'heading', any>;
    lineHeights: Record<'solid' | 'title' | 'copy', any>;
  };
  dark: boolean;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ComponentTheme {}
}
