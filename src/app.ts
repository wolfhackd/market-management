import env from './env.js';
import Fastify from 'fastify';

const app = Fastify({ logger: env.NODE_ENV !== 'production' });

export default app;
