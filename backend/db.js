const mongoose = require("mongoose");

require("dotenv").config();

const User = require("./models/User");

async function dbConnect() {
    try {
        const result = await mongoose.connect("mongodb://localhost:27017/artificialBrixDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB connected successfully");
    } catch (error) {
        console.log("Failed to connect to the DB", error);
    }
};

module.exports = dbConnect;