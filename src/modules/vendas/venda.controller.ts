import type { FastifyReply, FastifyRequest } from 'fastify';
import { vendaSchema } from './venda.schema.js';
import { prisma } from '../../../prisma/client.js';

export async function criarVenda(req: FastifyRequest, reply: FastifyReply) {
  try {
    const data = vendaSchema.parse(req.body);

    //Posso utilizar para fazer uma cadeia de funções
    const venda = await prisma.$transaction(async (tx) => {
      // valida e atualiza estoque
      for (const item of data.itens) {
        const produto = await tx.produtos.findUnique({
          where: { id_produto: item.id_produto },
        });

        if (!produto) {
          throw new Error(`Produto ${item.id_produto} não encontrado`);
        }

        if (produto.estoque < item.quantidade) {
          throw new Error(`Estoque insuficiente para o produto ${produto.nome}`);
        }

        await tx.produtos.update({
          where: { id_produto: item.id_produto },
          data: { estoque: produto.estoque - item.quantidade },
        });
      }

      // calcula total
      const valor_total = data.itens.reduce(
        (total, item) => total + item.preco_unitario * item.quantidade,
        0,
      );

      // cria a venda com os itens
      return tx.vendas.create({
        data: {
          id_cliente: data.id_cliente,
          id_operador: data.id_operador,
          forma_pagamento: data.forma_pagamento,
          status_pagamento: data.status_pagamento,
          observacoes: data.observacoes,
          valor_total,
          data_venda: new Date().toISOString(),
          itens: {
            create: data.itens.map((item) => ({
              id_produto: item.id_produto,
              quantidade: item.quantidade,
              preco_unitario: item.preco_unitario,
              subtotal: item.quantidade * item.preco_unitario,
            })),
          },
        },
        include: { itens: true },
      });
    });

    return reply.status(201).send(venda);
  } catch (err: any) {
    console.error(err);
    return reply.status(400).send({ error: err.message || 'Erro ao criar a venda' });
  }
}

//Não testei ainda
