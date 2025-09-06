-- CreateTable
CREATE TABLE "public"."Vendas" (
    "id_venda" TEXT NOT NULL,
    "data_venda" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quantidade" INTEGER NOT NULL,
    "preco_unitario" DOUBLE PRECISION NOT NULL,
    "valor_total" DOUBLE PRECISION NOT NULL,
    "forma_pagamento" TEXT NOT NULL,
    "status_pagamento" TEXT NOT NULL,
    "observacoes" TEXT,
    "id_cliente" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "id_operador" TEXT NOT NULL,

    CONSTRAINT "Vendas_pkey" PRIMARY KEY ("id_venda")
);

-- CreateTable
CREATE TABLE "public"."Despesas" (
    "id_despesa" TEXT NOT NULL,
    "data_despesa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoria" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "forma_pagamento" TEXT NOT NULL,
    "status_pagamento" TEXT NOT NULL,
    "comprovante" TEXT NOT NULL,

    CONSTRAINT "Despesas_pkey" PRIMARY KEY ("id_despesa")
);

-- CreateTable
CREATE TABLE "public"."Clientes" (
    "id_cliente" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "public"."Produtos" (
    "id_produto" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "preco_venda" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id_produto")
);

-- CreateTable
CREATE TABLE "public"."Operador" (
    "id_operador" TEXT NOT NULL,

    CONSTRAINT "Operador_pkey" PRIMARY KEY ("id_operador")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_cpf_cnpj_key" ON "public"."Clientes"("cpf_cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_email_key" ON "public"."Clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Produtos_codigo_key" ON "public"."Produtos"("codigo");

-- AddForeignKey
ALTER TABLE "public"."Vendas" ADD CONSTRAINT "Vendas_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "public"."Clientes"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vendas" ADD CONSTRAINT "Vendas_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "public"."Produtos"("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vendas" ADD CONSTRAINT "Vendas_id_operador_fkey" FOREIGN KEY ("id_operador") REFERENCES "public"."Operador"("id_operador") ON DELETE RESTRICT ON UPDATE CASCADE;
