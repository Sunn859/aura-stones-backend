import { getAllCategories } from "../services/category.service.js";

export async function getCategories(req,res,next) {
    try{
        const categories = await getAllCategories()

        res.status(200).json({
            success: true,
            message: "ดึงช้อมูลหมวดหมู่หินสำเร็จ",
            data: categories
        })
    }catch (error){
        next(error)
    }
}