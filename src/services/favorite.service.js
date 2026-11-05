import { prisma } from "../lib/prisma.js";

export async function addFavorite(userId, stoneId) {
  const stone = await prisma.stone.findUnique({
    where: {
      id: stoneId,
    },
  });

  if (!stone || !stone.isActive) {
    const error = new Error("ไม่พบข้อมูลหิน");
    error.statusCode = 404;
    throw error;
  }

  const existingFavorite = await prisma.favorite.findUnique({
      where: {
        userId_stoneId: {
          userId: userId,
          stoneId: stoneId,
        },
      },
    });

  if (existingFavorite) {
    const error = new Error("หินนี้อยู่ในรายการโปรดแล้ว");
    error.statusCode = 409;
    throw error;
  }

  const favorite = await prisma.favorite.create({
    data: {
      userId: userId,
      stoneId: stoneId,
    },
    include: {
      stone: true,
    },
  });

  return favorite;
}

export async function getUserFavorites(userId) {
  const favorites = await prisma.favorite.findMany({
    where: {
      userId: userId,
    },
    include: {
      stone: {
        include: {
          stoneCategories: {
            include: {
              category: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return favorites;
}

export async function removeFavorite(userId,stoneId) {
  const result = await prisma.favorite.deleteMany({
    where: {
      userId: userId,
      stoneId: stoneId,
    },
  });

  if (result.count === 0) {
    const error = new Error(
      "ไม่พบหินนี้ในรายการโปรด"
    );
    error.statusCode = 404;
    throw error;
  }

  return result;
}