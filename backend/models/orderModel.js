const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please add the username"]
        },
        date:{
            type: Date,
            required: [true, "Please add the date of order"]
        },
        totalPrice: {
            type: Number,
            required: [true, "Please add the total price"]
        },
        adress: {
            type: String,
            required: [true, "Please add your address"]
        },
        products: {
            type: Array,
            required: [true, "Please add the ordered products"]
        }
        
    },
    {
        timestamps: true,
    }
    )

    module.exports = mongoose.model("Order", orderSchema);