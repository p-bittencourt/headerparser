import { Application } from 'express';

export const createRoutes = (app: Application) => {
  // http://expressjs.com/en/starter/basic-routing.html
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });

  // your first API endpoint...
  app.get('/api/hello', function (req, res) {
    res.json({ greeting: 'hello API' });
  });
};
