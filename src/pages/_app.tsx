import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { MyContextProvider } from '../context';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <MyContextProvider>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Markazi+Text:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyle />
        <Component {...pageProps} />
      </MyContextProvider>
    </Provider>
  );
};

export default MyApp;