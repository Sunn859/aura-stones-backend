import {loginCheck,registerCheck, updateBirthDateCheck} from "../validations/auth.validation.js";

import {getUserById, loginUser,registerUser, updateUserBirthDate,} from "../services/auth.service.js";


export async function register(req, res) {
  try {
    const data = registerCheck.parse(req.body);

    const user = await registerUser(data);

    res.status(201).json({
      success: true,
      message: "สมัครสมาชิกสำเร็จ",
      data: user,
    });
  } catch (error) {
    console.error(error);

    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "เกิดข้อผิดพลาด",
    });
  }
}

export async function login(req, res) {
  try {
    const data = loginCheck.parse(req.body);

    const result = await loginUser(data);

    res.status(200).json({
      success: true,
      message: "เข้าสู่ระบบสำเร็จ",
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "เกิดข้อผิดพลาด",
    });
  }
}

export async function getMe(req, res) {
      try {
        const userId = req.user.id;
         // id มาจาก Token ไม่ได้รับจาก Frontend


        const user = await getUserById(userId);

        res.status(200).json({
          success: true,
          message: "ดึงข้อมูลผู้ใช้งานสำเร็จ",
          data: user,
        })
      } catch(error) {
        console.error(error);

        res.status(error.statusCode || 500).json({
          success: false,
          message: error.message || "เกิดข้อผิดพลาด",
        })
      }
} 


export async function updateMe(req,res,next) {
    try{
        const data = updateBirthDateCheck.parse(req.body);

        const userId = req.user.id

        const user = await updateUserBirthDate(
          userId,
          data.birthDate
        );
        res.status(200).json({
          success: true,
          message: "อัปเดตวันเกิดสำเร็จ",
          data: user
        })

    }catch(error) {
      next(error);
    }

    }
