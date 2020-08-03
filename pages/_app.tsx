import * as React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { useStore } from '../src/store';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    button {
       border: none;
       outline: none;
    }
    box-sizing: border-box;
  }
 `;

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
