const express = require("express");
const router = express.Router();

const Application = require("../models/Application");

// Apply Job API
router.post("/apply", async (req, res) => {

    try {

        const { userId, jobId } = req.body;
        
        // Check if already applied

        const existingApplication = await Application.findOne({
            userId,
            jobId
        });

        if (existingApplication) {

            return res.status(400).json({
                message: "You have already applied for this job"
            });

        }
        const newApplication = new Application({
            userId,
            jobId
        });

        await newApplication.save();

        res.status(201).json({
            message: "Job Applied Successfully",
            application: newApplication
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Get All Applications
router.get("/", async (req, res) => {

    try {

        const applications = await Application.find()
            .populate("userId")
            .populate("jobId");

        res.status(200).json(applications);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Get Applications By User ID

router.get("/user/:userId", async (req, res) => {

    try {

        const applications = await Application.find({
            userId: req.params.userId
        }).populate("jobId");

        res.status(200).json(applications);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;