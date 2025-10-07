import { z } from 'zod';
import * as dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const env = envSchema.parse(process.env);

export default env;
