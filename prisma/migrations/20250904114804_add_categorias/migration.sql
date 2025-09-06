-- CreateTable
CREATE TABLE "public"."Categorias" (
    "id_categoria" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categorias_nome_key" ON "public"."Categorias"("nome");

-- AddForeignKey
ALTER TABLE "public"."Despesas" ADD CONSTRAINT "Despesas_categoria_fkey" FOREIGN KEY ("categoria") REFERENCES "public"."Categorias"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;
