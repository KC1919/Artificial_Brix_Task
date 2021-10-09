const User = require("../models/User");
const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcryptjs");

authRouter.post("/login", login);

async function login(req, res) {

    try {
        const {
            email,
            password
        } = req.body;

        const user = await User.findOne({
            email: email
        });

        if (user !== null) {
            const result = await bcrypt.compare(password, user.password);

            if (result) {
                res.json("Logged in successfully!")
            } else {
                res.json("Invalid User credentials!");
            }
        }
    } catch (error) {
        res.json(error.message);
    }
}

authRouter.post("/register", register);

async function register(req, res) {

    try {
        const {
            name,
            email,
            password
        } = req.body;
        console.log(name, email, password);

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);

        const newUser = {
            name: name,
            email: email,
            password: hashPass
        }

        const user = await User.create(newUser);
        return res.status(200).json({
            message: "Registered successfully!",
            user: user
        });

    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
}

module.exports = authRouter;