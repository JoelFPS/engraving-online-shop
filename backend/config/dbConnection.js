const mongoose = require("mongoose");

const connectDb = async (str) => {
    try {
        const connect = await mongoose.connect(str);
        console.log(
            "Database connection: ", 
            connect.connection.host,
            connect.connection.host 
        );
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;