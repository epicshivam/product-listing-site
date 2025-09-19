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