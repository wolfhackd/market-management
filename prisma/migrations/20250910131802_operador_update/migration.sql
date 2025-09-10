/*
  Warnings:

  - Added the required column `nome` to the `Operador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Operador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Operador" ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;
