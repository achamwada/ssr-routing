import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import Routes from './../client/routes';

export default (req, context) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>,
  );

  const helmet = Helmet.renderStatic();

  return `<html lang="en">
    <head>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}  
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${content}</div>
        <script src="http://localhost:3000/client_bundle.js"></script>
    </body>
</html>`;
};
