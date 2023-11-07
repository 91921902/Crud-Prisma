import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const resultado = await prisma.cliente.findMany();
  console.log(resultado);
}


main();