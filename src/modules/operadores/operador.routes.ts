import type { FastifyInstance } from 'fastify';
import { cirarOperador, listarOperadores } from './operador.controller.js';

export async function operadorRoutes(fastify: FastifyInstance) {
  fastify.post('/criarOperador', cirarOperador);
  fastify.get('/listarOperadores', listarOperadores);
}
