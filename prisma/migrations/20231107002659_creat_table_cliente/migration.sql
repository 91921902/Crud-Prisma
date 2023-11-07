-- CreateTable
CREATE TABLE "cliente " (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT,
    "cpf" INTEGER NOT NULL,
    "address" TEXT,

    CONSTRAINT "cliente _pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente _name_key" ON "cliente "("name");
