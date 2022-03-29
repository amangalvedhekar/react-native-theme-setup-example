# Sample repo to set up theming with custom fonts
## Features available
- theme based styling
- dark / light mode
- custom fonts


![Simulator Screen Shot - iPad Pro (12 9-inch) (5th generation) - 2022-03-26 at 20 54 39](https://user-images.githubusercontent.com/15663361/160279301-3f3f7872-62d8-4ea9-b0cb-ff3a7a2e4f1d.png)
![Simulator Screen Shot - iPad Pro (12 9-inch) (5th generation) - 2022-03-26 at 20 54 29](https://user-images.githubusercontent.com/15663361/160279303-c8f3673d-6fa4-4744-b9de-8f1fb8471688.png)

### Fonts
Fonts can be setup in static/dynamic way in react-native
  - Static Font Setup
    - Add fonts to `assets/fonts` folder in root folder
    - Create file `react-native.config.js` and add following to the file:
       
      ```javascript
      module.exports = {
      project: {
      ios: {},
      android: {},
      },
      assets: ['./assets/fonts'],
      };

      ```
      - Run `react-native link` to set up link with font files
      - iOS specific
        - Update `Info.plist`  `UIAppFonts` key with post script name of the fonts(PS. - file name may or maynot be same as post script name)
        - in XCode `Build Phases` under `Copy Bundle Resources` add font files

### Theme
- Theme is provided to components using `ThemeProvider` from `styled-components`
- Components can then access theme object either through `styled`, `useTheme`, `withTheme`

### Theme Switching
- React-native provides `useColorScheme` hook to access `Appearance` and user setup
- ThemeProvider value is done fed with `useColorScheme` return value
