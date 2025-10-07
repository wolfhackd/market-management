import type { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../../prisma/client.js';
import { clienteSchema } from './cliente.schema.js';

export async function criarCliente(req: FastifyRequest, reply: FastifyReply) {
  try {
    const data = clienteSchema.parse(req.body);
    const { cpf_cnpj, email } = data;

    //Verificações de campos únicos
    const validacaoCpfCnpj = await prisma.clientes.findUnique({ where: { cpf_cnpj } });
    const validacaoEmail = await prisma.clientes.findUnique({ where: { email } });
    if (validacaoCpfCnpj) {
      return reply.status(409).send('Esse cpf/cnpj já existe no nosso banco de dados');
    }
    if (validacaoEmail) {
      return reply.status(409).send('Esse email já existe no nosso banco de dados');
    }

    const novoCliente = await prisma.clientes.create({ data });
    return reply.status(201).send(novoCliente);
  } catch {
    return reply.status(400).send('Não foi possivel criar o cliente.');
  }
}
export async function listarClientes(req: FastifyRequest, reply: FastifyReply) {
  try {
    const listaClientes = await prisma.clientes.findMany();
    if (listaClientes.length < 1) {
      return reply.status(200).send([]);
    }
    return reply.status(201).send(listaClientes);
  } catch {
    return reply.status(400).send('Não foi possivel listar os clientes.');
  }
}
