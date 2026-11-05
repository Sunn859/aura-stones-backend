import express from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { birthMatch } from "../controllers/birthMatch.controller.js"


const birthMatchRoute = express.Router()

birthMatchRoute.get("/", authMiddleware, birthMatch)

export default birthMatchRoute