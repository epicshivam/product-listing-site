import express from "express";
import { getProducts, createProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getProducts);
router.post("/createProduct", createProduct);
router.put("/updateProduct/:id", updateProduct);


export default router;