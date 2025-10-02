import type { FastifyReply, FastifyRequest } from 'fastify';
import { produtoSchema } from './produto.schema.js';
import { prisma } from '../../../prisma/client.js';

//Serios problemas no tratamento de erros

export async function criarProduto(req: FastifyRequest, reply: FastifyReply) {
  try {
    const data = produtoSchema.parse(req.body);

    const novoProduto = await prisma.produtos.create({ data });

    return reply.status(201).send(novoProduto);
  } catch (error) {
    return reply.status(400).send({
      message: 'Erro ao criar produto',
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export async function listarProdutos(req: FastifyRequest, reply: FastifyReply) {
  try {
    const produtos = await prisma.produtos.findMany();
    if (produtos.length != 0) {
      return reply.send(produtos);
    } else {
      return reply.send('Nenhum produto cadastrado ainda.');
    }
  } catch {
    return reply.status(400).send('Não foi possível realizar a listagem');
  }
}
