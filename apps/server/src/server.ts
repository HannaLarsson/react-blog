import express from 'express';
import morgan from 'morgan';
import { v4 as uuidv4 } from 'uuid';

import { EMOJI_KIND, type Emoji } from 'api';

const apiRouter = () => {
  const router = express.Router();
  router.get('/', (_req, res) => {
    res.json('Hello, world!');
  });

  router.get('/emoji', (_req, res) => {
    const emojiObject: Emoji = {
      id: uuidv4(),
      kind: EMOJI_KIND[Math.floor(Math.random() * EMOJI_KIND.length)],
      timestamp: new Date().toISOString(),
    };
    res.json(emojiObject);
  });

  return router;
};

export const createServer = () => {
  const app = express();

  app.use(morgan('dev')).use(express.json()).use('/api', apiRouter());

  return app;
};
