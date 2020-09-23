import React from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import App from './App';
import i18n from './i18n/i18n'; // initialized i18next instance

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

