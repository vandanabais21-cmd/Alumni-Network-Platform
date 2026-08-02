const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Register API
router.post("/register", async (req, res) => {

    try {

        const { fullName, email, password, branch, passoutYear } = req.body;

        const newUser = new User({
            fullName,
            email,
            password,
            branch,
            passoutYear
        });

        await newUser.save();

        res.status(201).json({
            message: "User Registered Successfully",
            user: newUser
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Login API
router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                message: "Invalid Password"
            });
        }

        res.status(200).json({
            message: "Login Successful",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Get Profile API
router.get("/profile/:id", async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.status(200).json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Update Profile API
router.put("/profile/:id", async (req, res) => {

    try {

        const { fullName, branch, passoutYear } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                fullName,
                branch,
                passoutYear
            },
            {
                returnDocument: "after"
            }
        );

        if (!updatedUser) {

            return res.status(404).json({
                message: "User Not Found"
            });

        }

        res.status(200).json({
            message: "Profile Updated Successfully",
            user: updatedUser
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;