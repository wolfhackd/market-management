/*
  Warnings:

  - The `codigo` column on the `Produtos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `preco_venda` on the `Produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Produtos" DROP COLUMN "preco_venda",
ADD COLUMN     "preco_venda" DOUBLE PRECISION NOT NULL,
DROP COLUMN "codigo",
ADD COLUMN     "codigo" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Produtos_codigo_key" ON "public"."Produtos"("codigo");
