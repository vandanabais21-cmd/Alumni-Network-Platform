const express = require("express");
const router = express.Router();

const Feedback = require("../models/Feedback");

// Save Feedback
router.post("/", async (req, res) => {

    try {

        const { name, email, message } = req.body;

        const newFeedback = new Feedback({
            name,
            email,
            message
        });

        await newFeedback.save();

        res.status(201).json({
            message: "Feedback Submitted Successfully",
            feedback: newFeedback
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Get All Feedback
router.get("/", async (req, res) => {

    try {

        const feedbacks = await Feedback.find();

        res.status(200).json(feedbacks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;