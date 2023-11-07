
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
    const result = await prisma.cliente.create({
      data: {
        name: "Maria",
        last_name:"Mara",
        cpf:3333333333,
        address: "dksfolsfsflefpefjewflefdbfbg",
      },
    });
  
  
    console.log(result);
  }
  
  
  main();