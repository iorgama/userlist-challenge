import { StyleSheetManager, ThemeProvider } from "styled-components";
import theme from "./style/theme/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import { AppRoutes } from "./routes/Routes";
import isPropValid from '@emotion/is-prop-valid';
import { UsersProvider } from "./contexts/UsersContext";
import { Helmet } from 'react-helmet';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyleSheetManager enableVendorPrefixes shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true
      }}>
        <UsersProvider>
        <Header />
        <AppRoutes />
        </UsersProvider>
      </StyleSheetManager>
    </ThemeProvider>
  );
};

export default App;
