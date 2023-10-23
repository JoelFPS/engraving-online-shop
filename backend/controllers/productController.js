const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

//@desc Get all products
//@route GET /api/products
//@access public

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
});

//@desc Create new product
//@route POST /api/products
//@access public

const createProduct = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);
    const { name, src, description, price } = req.body;
    if(!name || !src || !description || !price) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const product = await Product.create({
        name,
        src,
        description,
        price
    })
    res.status(201).json(product);
});

//@desc Get product
//@route GET /api/products/:id
//@access public

const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(product);
});

//@desc Update product
//@route PUT /api/products/:id
//@access public

const updateProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update product for ${req.params.id}` });
});

//@desc Delete product
//@route DELETE /api/products/:id
//@access public

const deleteProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete product for ${req.params.id}` });
});

module.exports = { 
    getProducts, 
    createProduct, 
    getProduct, 
    updateProduct, 
    deleteProduct 
};