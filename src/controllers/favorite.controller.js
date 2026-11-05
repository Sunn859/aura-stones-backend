import { addFavorite, getUserFavorites,removeFavorite,} from "../services/favorite.service.js";

export async function createFavorite(req,res,next) {
  try {
    const userId = req.user.id;
    const stoneId = Number(req.params.stoneId);

    if (!Number.isInteger(stoneId)) {
      const error = new Error(
        "รหัสหินไม่ถูกต้อง"
      );
      error.statusCode = 400;
      throw error;
    }

    const favorite = await addFavorite(userId,stoneId);

    res.status(201).json({
      success: true,
      message: "เพิ่มหินในรายการโปรดสำเร็จ",
      data: favorite,
    });
  } catch (error) {
    next(error);
  }
}

export async function getFavorites(req,res,next) {
  try {
    const userId = req.user.id;

    const favorites = await getUserFavorites(userId);

    res.status(200).json({
      success: true,
      message: "ดึงรายการโปรดสำเร็จ",
      data: favorites,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteFavorite(req,res,next) {
  try {
    const userId = req.user.id;
    const stoneId = Number(req.params.stoneId);

    if (!Number.isInteger(stoneId)) {
      const error = new Error(
        "รหัสหินไม่ถูกต้อง"
      );
      error.statusCode = 400;
      throw error;
    }

    const result = await removeFavorite(userId, stoneId);

    res.status(200).json({
      success: true,
      message: "นำหินออกจากรายการโปรดสำเร็จ",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}