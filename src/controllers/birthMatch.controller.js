
import { birthMatchStones } from "../services/birthMatch.service.js"

export async function birthMatch(req,res,next) {
    try{
        console.log("req.user =", req.user);
        const userId = req.user.id

        const result = await birthMatchStones(userId);
        res.status(200).json({
            success: true,
            message: "แนะนำหินสำเร็จ",
            data: result,
        });

         } catch(error){
        next(error);
    }
}