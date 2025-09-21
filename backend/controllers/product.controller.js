import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find({});

        if(products.length === 0) {
            return res.status(400).json({success:false, message : "no products found", products});
        }

        res.status(200).json({success: true, message : "products found", products});
    } catch (error) {
        console.log(`error in fetching products : ${error.message}`);
        res.status(500).json({success : false, message : `Server Error`});
    }
}

export const createProduct = async (req,res) => {
    try {
        const {name,price,image} = req.body;

        if(!name.length || !price.length || !image.length) {
            return res.status(400).json({success:false, message:"all fields are required"});
        }

        const product = new Product({
            name,
            price,
            image
        });

        await product.save();

        res.status(201).json({success:true, message : "product is created", product});
    } catch (error) {
        console.log(`Error in creating the product ${error.message}`);
        res.status(500).json({success:false, message:`internal server error`});
    }
}

export const updateProduct = async (req,res) => {
    const {id} = req.params;

    const {name,price,image} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false,message:"Invalid Product ID"});
    }

    try {
        if(!name.length || !price.length || !image.length) {
            return res.status(400).json({success:false, message : `Invalid Credentials`});
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, {name,price,image}, {new:true});
        res.status(200).json({success:true, message:`product data updated`, updatedProduct})
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
}

export const deleteProduct = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false,message:`Invalid Id`});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"product deleted"});
    } catch (error) {
        res.status(500).json({success:false,message:"internal serer error"});
    }
}

export const getProduct = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false,message:`Invalid Id`});
    }

    try {
        const product = await Product.findById(id);
        if(!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({success:true,message:"product found", product});
    } catch (error) {
        res.status(500).json({success:false,message:"internal serer error"});
    } 
}