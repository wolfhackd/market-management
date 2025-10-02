import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import env from './env.js';
import Fastify from 'fastify';

const app = Fastify({ logger: env.NODE_ENV !== 'production' }).withTypeProvider<ZodTypeProvider>();

// conecta zod ao fastify
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

export default app;
