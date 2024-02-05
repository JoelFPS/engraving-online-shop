const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
        username: {
            type: String,
            required: [true, "Please add the username"]
        },
        totalPrice: {
            type: Number,
            required: [true, "Please add the total price"]
        },
        city: {
            type: String,
            required: [true, "Please add the city name"]
        },
        street: {
            type: String,
            required: [true, "Please add the street name"]
        },
        number: {
            type: Number,
            required: [true, "Please add the house's number"]
        },
        apartmentNumber: {
            type: Number,
            required: [false, "Please add the apartment number"]
        },
        zipCode: {
            type: String,
            required: [true, "Please add the zip code"]
        },
        products: {
            type: Object,
            required: [true, "Please add the products"]
        }
        
    },
    {
        timestamps: true,
    }
    )

    module.exports = mongoose.model("Order", orderSchema);