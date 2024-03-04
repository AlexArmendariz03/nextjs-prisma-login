import { PrismaClient } from '@prisma/client/edge'
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
const prismaClientSingleton= () =>{
  return new PrismaClient()
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV === "production") globalForPrisma.prisma = prisma