import express from 'express'
import authRoute from './routes/auth.route.js';
import { pathNotFound } from './middlewares/pathNotFound.middleware.js';
import { errorHandler } from './middlewares/errorHandler.js';
import stoneRoute from './routes/stone.route.js';
import categoryRoute from './routes/category.route.js';
import birthMatchRoute from './routes/birthMatch.route.js';
import cors from "cors";
import favoriteRoute from "./routes/favorite.route.js";


const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/check", (req,res) => {
    res.send({
        success : true,
        messeage: "Stone Api is running",

    });
});

app.use('/auth', authRoute)
app.use('/stones', stoneRoute)
app.use('/category', categoryRoute)
app.use('/birthmatch', birthMatchRoute)
app.use("/favorites", favoriteRoute);


app.use(pathNotFound)
app.use(errorHandler)

export default app