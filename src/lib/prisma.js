import "dotenv/config";
import fs from "node:fs";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client.js";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,

  ssl: {
  ca: process.env.DATABASE_CA_CERT
    ? process.env.DATABASE_CA_CERT.replace(/\\n/g, "\n")
    : fs.readFileSync("./ca.pem", "utf8"),
  rejectUnauthorized: true,
},

  connectionLimit: 5,
  connectTimeout: 20000,
});

const prisma = new PrismaClient({ adapter });

export { prisma };