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