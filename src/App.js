import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';
import Router from './Router';

import store from './Store/configureStore';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f9f9f9;
  }
`;

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>
);

export default App;
