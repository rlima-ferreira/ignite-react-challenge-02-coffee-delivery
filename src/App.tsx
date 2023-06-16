import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './Router';
import OrderProvider from './contexts/OrderContext';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <OrderProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
          <GlobalStyle />
        </OrderProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
