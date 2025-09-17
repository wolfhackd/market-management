/*
  Warnings:

  - You are about to drop the column `id_produto` on the `Vendas` table. All the data in the column will be lost.
  - You are about to drop the column `preco_unitario` on the `Vendas` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `Vendas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Vendas" DROP CONSTRAINT "Vendas_id_produto_fkey";

-- AlterTable
ALTER TABLE "public"."Vendas" DROP COLUMN "id_produto",
DROP COLUMN "preco_unitario",
DROP COLUMN "quantidade",
ADD COLUMN     "produtosId_produto" TEXT;

-- CreateTable
CREATE TABLE "public"."ItensVenda" (
    "id_item" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco_unitario" DOUBLE PRECISION NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "id_venda" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "clientesId_cliente" TEXT,

    CONSTRAINT "ItensVenda_pkey" PRIMARY KEY ("id_item")
);

-- AddForeignKey
ALTER TABLE "public"."Vendas" ADD CONSTRAINT "Vendas_produtosId_produto_fkey" FOREIGN KEY ("produtosId_produto") REFERENCES "public"."Produtos"("id_produto") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItensVenda" ADD CONSTRAINT "ItensVenda_id_venda_fkey" FOREIGN KEY ("id_venda") REFERENCES "public"."Vendas"("id_venda") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItensVenda" ADD CONSTRAINT "ItensVenda_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "public"."Produtos"("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItensVenda" ADD CONSTRAINT "ItensVenda_clientesId_cliente_fkey" FOREIGN KEY ("clientesId_cliente") REFERENCES "public"."Clientes"("id_cliente") ON DELETE SET NULL ON UPDATE CASCADE;
