import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyles';
import App from './container/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);