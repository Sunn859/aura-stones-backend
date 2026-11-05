import express from "express"
import { getStoneId, getStones } from "../controllers/stone.controller.js"

const  stoneRoute = express.Router()

stoneRoute.get("/", getStones)
stoneRoute.get("/:id", getStoneId)

export default stoneRoute