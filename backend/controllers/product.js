import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
    try {
        const productList = await Product.find().sort({
            createdAt: -1,
        });

        res.status(200).json(productList);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch products",
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch product",
        });
    }
};

export const createProduct = async (req, res) => {
    try {
        const {
            name,
            category,
            price,
            description,
        } = req.body;

        const newProduct = await Product.create({
            name,
            category,
            price,
            description,
        });

        res.status(201).json({
            message: "Product created successfully",
            product: newProduct,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create product",
        });
    }
};