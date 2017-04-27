import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500', 'sans-serif']
  }
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
