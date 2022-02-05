import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './presenter';
import * as Global from './index.styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Global.theme}>
      <CssBaseline>
        <Global.ResetStyle />
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
