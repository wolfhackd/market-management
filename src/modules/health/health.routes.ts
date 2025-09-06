import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const health = (req: FastifyRequest, reply: FastifyReply) => {
  try {
    return reply.status(201).send('Ok');
  } catch {
    return reply.send('Não sucessido');
  }
};

export async function healthRoute(fastify: FastifyInstance) {
  fastify.get('/health', health);
}
