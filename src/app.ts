import express, { Application } from 'express';
import cors    from 'cors';
import helmet  from 'helmet';
import { apiRouter }        from './routes';
import { errorHandler }     from './middleware/error.middleware';
import { loggerMiddleware } from './middleware/logger.middleware';
import { apiLimiter }       from './middleware/rateLimiter';

export const createApp = (): Application => {
  const app = express();

  app.use(helmet());
  app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') ?? '*',
    credentials: true
  }));
  app.use('/api', apiLimiter);

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: false }));

  app.use(loggerMiddleware);

  app.use('/api/v1', apiRouter);

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.use(errorHandler);

  return app;
};