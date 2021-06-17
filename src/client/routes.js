import React from 'react';
import App from './app';
import HomePage from './pages/homePage';

export default [
  {
    path: '/',
    exact: true,
    ...App,
    routes: [
      {
        ...HomePage,
      },
    ],
  },
];
