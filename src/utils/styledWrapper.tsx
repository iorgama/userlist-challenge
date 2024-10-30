
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../style/theme/theme';
import { render } from '@testing-library/react';

const renderWithTheme = (element: ReactElement) => {
  return render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);
};

export { renderWithTheme }; 
