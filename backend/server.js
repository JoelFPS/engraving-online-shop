const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const productRoutes = require("./routes/productRoutes");
const viewsRoutes = require("./routes/viewsRoutes");
const dotenv = require("dotenv").config();

connectDb(process.env.CONNECTION_STRING);
const app = express();

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs'); //set engine of templates EJS
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/", viewsRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});