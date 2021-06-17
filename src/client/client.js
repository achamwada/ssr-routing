// Start up point for client side app
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { renderRoutes } from 'react-router-config';

ReactDOM.hydrate(
  <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
  </BrowserRouter>,
  document.querySelector('#root'),
);
