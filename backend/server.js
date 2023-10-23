const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const productRoutes = require("./routes/productRoutes");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/products", productRoutes);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});