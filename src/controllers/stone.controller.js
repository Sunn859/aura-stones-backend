import { getAllstone, getStoneById } from "../services/stone.service.js";

export async function getStones(req,res,next) {
    try{
        const stones = await getAllstone()

        res.status(200).json({
            success: true,
            message: "ดึงข้อมูลหินสำเร็จ",
            data: stones,
        });
    }catch(error){
        next(error)
    }
}

export async function getStoneId(req,res,next) {
    try{
        const id = Number(req.params.id)

        if(Number.isNaN(id)) {
            const error = new Error("รหัสหินไม่ถูกต้อง")
            error.statusCode = 400;
            throw error;
        }

        const stone = await getStoneById(id)
        
        res.status(200).json({
            succes: true,
            message:  "ดึงรายละเอียดหินสำเร็จ",
            data: stone,
        });
    }catch(error){
        next(error)
    }
}