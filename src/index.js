import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import Routes from './client/routes';
import renderer from './helpers/renderer';

import bodyParser from 'body-parser';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, context);
    console.log('context =>', context);

    // if(context.url){
    //     return res.redirect(301, context.url);
    // }

    // check if 404
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});
