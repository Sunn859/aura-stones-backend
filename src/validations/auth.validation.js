import z from "zod";

export const registerCheck = z.object({
    name : z
        .string()
        .trim()
        .min(2, "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร"),

    email : z
        .string()
        .trim()
        .email("รูปแบบอีเมลไม่ถูกต้อง"),

    password : z
        .string()
        .min(6,"รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
})


export const loginCheck = z.object({
    email : z
        .string()
        .email(),

    password : z
        .string()
        .min(6),
})

export const updateBirthDateCheck = z.object({
    birthDate : z.coerce.date({
        message: "วันเกิดไม่ถูกต้อง",
    })
})