import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import WebFont from 'webfontloader';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

WebFont.load({
  google: { families: ['Roboto:300,400,500', 'sans-serif'] }
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
