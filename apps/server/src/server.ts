import express from 'express';
import morgan from 'morgan';
import { v4 as uuidv4 } from 'uuid';
import data from '../src/data/db.json';
import { Blog } from '../../../types';

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

  router.get('/blogs', (_req, res) => {
    console.log('i /blogs');
    const blogs: Blog[] = data.blogs.map(blog => ({
      title: blog.title,
      author: blog.author,
      id: blog.id,
      body: blog.body,
    }));
    res.json(blogs);
  });

  router.get('/blogs/:id', (req, res) => {
    try {
      const blog: Blog | undefined = data.blogs.find(blog => blog.id === +req.params.id);
      if (!blog) {
        res.status(404).json({ error: 'Blog not found' });
        return;
      }

      console.log('foo');

      const blogObject = {
        title: blog.title,
        author: blog.author,
        id: blog.id,
        body: blog.body,
      };
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(blogObject);
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
};

export const createServer = () => {
  const app = express();

  app.use(morgan('dev')).use(express.json()).use('/api', apiRouter());

  return app;
};
