import type { FastifyReply, FastifyRequest } from 'fastify';
import { despesaSchema } from './despesas.schema.js';
import { prisma } from '../../../prisma/client.js';

export async function criarDespesa(req: FastifyRequest, reply: FastifyReply) {
  try {
    const data = despesaSchema.parse(req.body);

    const novaDespesa = await prisma.despesas.create({ data });

    return reply.status(201).send(novaDespesa);
  } catch (err: any) {
    return reply.status(409).send({ error: 'Erro na criação da despesa', message: err.message });
  }
}

// export async function listarDespesas(req: FastifyRequest, reply: FastifyReply) {
//   try{
//     const
//   }
// }
