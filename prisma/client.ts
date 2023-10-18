import { PrismaClient, Status, Ticket, User } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export { Status, prisma }
export type { Ticket, User }

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

