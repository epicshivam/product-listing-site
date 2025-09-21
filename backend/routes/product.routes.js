import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct, getProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getProducts);
router.post("/createProduct", createProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/:id", getProduct);


export default router;