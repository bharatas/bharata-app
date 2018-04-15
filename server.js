import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/js/widgets/App';
import homePage from './src/Home';

const app = express();
const port = process.env.PORT || 5000;

app.get('/App', (req, res) => {
  const appString = renderToString(<App />);

  res.send(homePage({
    body: appString,
    title: 'Hello World from the server'
  }));
});

app.listen(port, () => console.log(`Listening on port ${port}`));