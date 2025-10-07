/*
  Warnings:

  - The `criado_em` column on the `Clientes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `criado_em` column on the `Despesas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `criado_em` column on the `Produtos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `data_venda` column on the `Vendas` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Clientes" DROP COLUMN "criado_em",
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Despesas" DROP COLUMN "criado_em",
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Produtos" DROP COLUMN "criado_em",
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Vendas" DROP COLUMN "data_venda",
ADD COLUMN     "data_venda" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
