import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from "cors";
import path from "path";
dotenv.config();

import productRoutes from "./routes/product.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

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

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname , "/frontend/dist")));

  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  })
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is started`);
})