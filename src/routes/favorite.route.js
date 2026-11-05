import express from "express";
import {createFavorite,deleteFavorite,getFavorites,} from "../controllers/favorite.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";


const favoriteRoute = express.Router();

favoriteRoute.get("/", authMiddleware, getFavorites);

favoriteRoute.post("/:stoneId", authMiddleware, createFavorite);

favoriteRoute.delete("/:stoneId", authMiddleware, deleteFavorite);

export default favoriteRoute;