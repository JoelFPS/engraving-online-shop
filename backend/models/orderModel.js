const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
        username: {
            type: String,
            required: [true, "Please add the product name"]
        },
        totalPrice: {
            type: Number,
            required: [true, "Please add the product price"]
        }
    },
    {
        timestamps: true,
    }
    )

    module.exports = mongoose.model("Product", orderSchema);