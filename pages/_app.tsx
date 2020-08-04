import * as React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import InitApp from '../src/components/InitApp';
import { useStore } from '../src/store';
import 'antd/dist/antd.css';

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
      <InitApp>
        <Component {...pageProps} />
      </InitApp>
    </Provider>
  );
}
