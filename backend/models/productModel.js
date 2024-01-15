const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please add the product name"]
        },
        category: {
            type: String,
            required: [true, "Please add the product name"]
        },
        src: {
            type: String,
            required: [true, "Please add the product image src"]
        }, 
        description: {
            type: String,
            required: [true, "Please add the product description"]
        }, 
        price: {
            type: Number,
            required: [true, "Please add the product price"]
        },
        rating: {
            type: Number,
            required: [true, "Please add the product rating"]
        }
    },
    {
        timestamps: true,
    }
    )

    module.exports = mongoose.model("Product", productSchema);