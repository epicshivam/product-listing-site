import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
dotenv.config();

import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send('server is ready')
})

app.use("/api/products", productRoutes)

app.listen(3000, () => {
    connectDB();
    console.log(`Server is started`);
})