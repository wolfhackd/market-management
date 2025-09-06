import { prisma } from './client.js';

async function main() {
  await prisma.categorias.createMany({
    data: [
      { nome: 'Aluguel' },
      { nome: 'Energia elétrica' },
      { nome: 'Telefone/Internet' },
      { nome: 'Fornecedores' },
      { nome: 'Marketing/Publicidade' },
      { nome: 'Transporte/Combustível' },
      { nome: 'Material de escritório' },
      { nome: 'Impostos/Taxas' },
      { nome: 'Manutenção' },
      { nome: 'Outras despesas' },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(() => console.log('Categorias criadas 🚀👋'))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
