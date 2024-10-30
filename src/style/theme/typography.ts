export type ThemeFontWeightsProps = {
  light: number;
  regular: number;
  semibold: number;
  bold: number;
  black: number;
};

export const fontWeights: ThemeFontWeightsProps = {
  light: 300,
  regular: 400,
  semibold: 500,
  bold: 700,
  black: 900,
};

export type ThemeFontSizesProps = {
  base: string;
  xs: string;
  md: string;
  lg: string;
};

export const fontSizes: ThemeFontSizesProps = {
  base: '14px',
  xs: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
};

export type ThemeLineHeightsProps = {
  base: string;
  heading: string;
  paragraph: string;
};

export const lineHeights: ThemeLineHeightsProps = {
  base: '1.2',
  heading: '1.5',
  paragraph: '1.2',
};
