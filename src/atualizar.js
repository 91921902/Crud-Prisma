import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.cliente.update({
    where: {
        id: 'c403e679-4833-4912-a3b6-421f21a66d87',  
    },
    data: {
        cpf:456389723,
    },
  });


  console.log(result);
}
main();