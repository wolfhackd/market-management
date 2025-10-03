import type { FastifyInstance } from 'fastify';
import { criarOperador, listarOperadores } from './operador.controller.js';

export async function operadorRoutes(fastify: FastifyInstance) {
  fastify.post('/criarOperador', criarOperador);
  fastify.get('/listarOperadores', listarOperadores);
}
