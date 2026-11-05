import express from 'express'
import {getMe, login, register, updateMe} from "../controllers/auth.controller.js"
import { authMiddleware } from '../middlewares/auth.middleware.js'

const authRoute = express.Router()

authRoute.post('/login', login)
authRoute.post('/register', register)
authRoute.get('/me', authMiddleware, getMe)
authRoute.patch('/me', authMiddleware, updateMe)

export default authRoute