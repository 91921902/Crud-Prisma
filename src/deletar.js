import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.cliente.delete({
    where: {
        id: 'c403e679-4833-4912-a3b6-421f21a66d87',   
    },
  });


  console.log(result);
}


main();