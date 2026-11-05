import { prisma } from "../lib/prisma.js";

const dayNames = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

export async function birthMatchStones(userId) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      birthDate: true,
    },
  });

  if (!user) {
    const error = new Error("ไม่พบผู้ใช้งาน");
    error.statusCode = 404;
    throw error;
  }

  if (!user.birthDate) {
    const error = new Error(
      "กรุณาเพิ่มวันเดือนปีเกิดก่อน"
    );
    error.statusCode = 400;
    throw error;
  }

  const dayNumber = user.birthDate.getUTCDay();
  const dayOfWeek = dayNames[dayNumber];

  const results = await prisma.stoneBirthDay.findMany({
      where: {
        dayOfWeek: dayOfWeek,
        stone: {
          isActive: true,
        },
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
    });

  const stones = results.map((item) => {
    return item.stone;
  });

  return {
    birthDate: user.birthDate,
    dayOfWeek: dayOfWeek,
    stones: stones,
  };
}