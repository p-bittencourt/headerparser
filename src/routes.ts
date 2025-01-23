import { Application, Request, Response } from 'express';

export const createRoutes = (app: Application) => {
  // http://expressjs.com/en/starter/basic-routing.html
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });

  app.get('/api/whoami', function (req: Request, res: Response) {
    const ipaddress = req.ip;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];
    res.json({ ipaddress, language, software });
  });
};
