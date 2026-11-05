import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";
import { createToken } from "../utils/jwt.js";

export async function registerUser(data) {
  const checkUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (checkUser) {
    const error = new Error("อีเมลนี้ถูกใช้งานแล้ว");
    error.statusCode = 409;
    throw error;
  }

  const hashPassword = await bcrypt.hash(
    data.password,
    10
  );

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return user;
}


export async function loginUser(data) {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    const error = new Error(
      "อีเมลหรือรหัสผ่านไม่ถูกต้อง"
    );
    error.statusCode = 401;
    throw error;
  }

  const isPassword = await bcrypt.compare(
    data.password,
    user.password
  );

  if (!isPassword) {
    const error = new Error(
      "อีเมลหรือรหัสผ่านไม่ถูกต้อง"
    );
    error.statusCode = 401;
    throw error;
  }

  const token = createToken(user);

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
}

export async function getUserById(id) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      birthDate: true,
      role: true,
      createdAt: true,
    },
  })

  if (!user) {
    const error = new Error("ไม่พบผู้ใช้งาน");
    error.statusCode = 404;
    throw error;
  }

  return user;
}


export async function updateUserBirthDate(userId, birthDate) {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      birthDate,
    },
    select: {
      id: true,
      name: true,
      email: true,
      birthDate: true,
      role: true,
    },
  });

  return user
}