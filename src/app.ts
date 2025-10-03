import { type ZodTypeProvider } from 'fastify-type-provider-zod';
import env from './env.js';
import Fastify from 'fastify';

const app = Fastify({ logger: env.NODE_ENV !== 'production' }).withTypeProvider<ZodTypeProvider>();

export default app;
