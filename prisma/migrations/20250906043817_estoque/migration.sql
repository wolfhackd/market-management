/*
  Warnings:

  - Added the required column `estoque` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Produtos" ADD COLUMN     "estoque" INTEGER NOT NULL;
