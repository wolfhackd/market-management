import type { FastifyReply, FastifyRequest } from 'fastify';
import { operadorSchema } from './operador.schema.js';
import { prisma } from '../../../prisma/client.js';

export async function cirarOperador(req: FastifyRequest, reply: FastifyReply) {
  try {
    const data = operadorSchema.parse(req.body);

    const novoOperador = await prisma.operador.create({ data });

    return reply.status(201).send(novoOperador);
  } catch (error) {
    return reply.status(400).send({
      message: 'Erro ao criar operador',
      error,
    });
  }
}

export async function listarOperadores(req: FastifyRequest, reply: FastifyReply) {
  try {
    const listaOperadores = await prisma.operador.findMany();

    if (listaOperadores.length > 0) {
      return reply.status(201).send(listaOperadores);
    } else {
      return reply.status(201).send('Nenhum operador registrado.');
    }
  } catch (error) {
    return reply.status(400).send({
      message: 'Erro ao listar operadores',
      error,
    });
  }
}
