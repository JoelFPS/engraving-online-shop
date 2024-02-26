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
    const { name, category, src, description, price, rating } = req.body;
    if(!name || !category || !src || !description || isNaN(parseFloat(price)) || isNaN(parseFloat(rating))) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const product = await Product.create({
        name,
        category,
        src,
        description,
        price,
        rating
    })
    res.status(201).json(product);
});


//@desc Create new order
//@route POST /api/products
//@access public

const createOrder = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);
    const { login, date, totalPrice, adress, products } = req.body;
    if(!login || !date || isNaN(parseFloat(totalPrice)) || !adress || !products) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const order = await Order.create({
        login, 
        date, 
        totalPrice, 
        adress, 
        products
    })
    res.status(201).json(order);
});


//@desc Get product
//@route GET /api/products/:id
//@access public

const getProduct = asyncHandler(async (req, res, next) => {
    Product.findById(req.params.id).then(product => {
        if(product == null) {
            res.status(404);
            res.locals.message = "Nie znaleziono";
        } else {
            res.status(200).json(product);
        }
    }).catch( err => {
        res.status(404);
        res.locals.message = "Nie znaleziono";
        res.locals.stacktrace = err.stacktrace;
    }).finally( () => {
        next();
    });
});

//@desc Update product
//@route PUT /api/products/:id
//@access public

const updateProduct = asyncHandler(async (req, res, next) => {
    Product.findById(req.params.id).then( async product => {
        if(product == null) {
            res.status(404);
            res.locals.message = "Nie znaleziono";
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedProduct);
    }).catch( err => {
        res.status(404);
        res.locals.message = "Nie znaleziono";
        res.locals.stacktrace = err.stacktrace;
    }).finally( () => {
        next();
    });
});

//@desc Delete product by id
//@route DELETE /api/products/:id
//@access public

const deleteProduct = asyncHandler(async (req, res, next) => {
    Product.findById(req.params.id).then(async product => {
        if(product == null) {
            res.status(404);
            res.locals.message = "Nie znaleziono";
        }
        await Product.findOneAndDelete();
        res.status(200).json(product);
    }).catch( err => {
        res.status(404);
        res.locals.message = "Nie znaleziono";
        res.locals.stacktrace = err.stacktrace;
    }).finally( () => {
        next();
    });
});

module.exports = { 
    getProducts, 
    createProduct, 
    createOrder,
    getProduct, 
    updateProduct, 
    deleteProduct,
};