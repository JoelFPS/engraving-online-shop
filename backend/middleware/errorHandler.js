const { constants } = require("../constants");
const errorHandler = (req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ 
                title: "Validation Failed", 
                message: res.locals.message,
                stackTrace: res.locals.stacktrace,
            });
        case constants.NOT_FOUND:
            res.json({ 
                title: "Not Found", 
                message: res.locals.message,
                stackTrace: res.locals.stacktrace, 
            });
        case constants.UNAUTHORIZED:
            res.json({ 
                title: "Unautorized", 
                message: res.locals.message,
                stackTrace: res.locals.stacktrace,
            });
        case constants.FORBIDDEN:
            res.json({ 
                title: "Forbidden", 
                message: res.locals.message,
                stackTrace: res.locals.stacktrace,
            });
        case constants.SERVER_ERROR:
            res.json({ 
                title: "Server error", 
                message: res.locals.message,
                stackTrace: res.locals.stacktrace,
            });
        default:
            console.log("No Error, All good!");
            break;
    }
       
};

module.exports = errorHandler;