import { prisma } from "../lib/prisma.js";

export async function getAllstone() {
  const stones = await prisma.stone.findMany({
    where: {
      isActive: true,
    },
    include: {
      stoneCategories: {
        include: {
          category: true,
        },
      },
    },
  });

  return stones;
}

export async function getStoneById(id) {
    const stone = await prisma.stone.findUnique({
        where: {
            id,
        }
    });

    if(!stone) {
        const error = new Error ("ไม่พบข้อมูลหิน")
        error.statuscode = 409;
        throw error;
    }

    return stone
}