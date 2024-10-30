import { ThemeColorsProps, colors } from './colors';
import {
  ThemeFontSizesProps,
  ThemeFontWeightsProps,
  fontWeights,
  fontSizes,
  ThemeLineHeightsProps,
  lineHeights,
} from './typography';
import { shadows, ThemeShadowsProps } from './shadows';
import { spacing, ThemeSpacingProps } from './spacing';

export interface Theme {
  fontWeights: ThemeFontWeightsProps;
  colors: ThemeColorsProps;
  shadows: ThemeShadowsProps;
  spacing: ThemeSpacingProps;
  fontSizes: ThemeFontSizesProps;
  lineHeights: ThemeLineHeightsProps;
}

const theme = {
  fontWeights,
  colors,
  shadows,
  spacing,
  fontSizes,
  lineHeights,
};

export default theme;
