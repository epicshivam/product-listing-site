import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from "cors";
dotenv.config();

import productRoutes from "./routes/product.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.get("/", (req,res) => {
    res.send('server is ready')
})

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is started`);
})