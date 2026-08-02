const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Job = require("../models/Job");
const Application = require("../models/Application");
const Event = require("../models/Event");
const Feedback = require("../models/Feedback");

// Dashboard Statistics
router.get("/stats", async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();
        const totalJobs = await Job.countDocuments();
        const totalApplications = await Application.countDocuments();
        const totalEvents = await Event.countDocuments();
        const totalFeedback = await Feedback.countDocuments();

        res.json({

            totalUsers,
            totalJobs,
            totalApplications,
            totalEvents,
            totalFeedback

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});


// Get All Users

router.get("/users", async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Get All Jobs

router.get("/jobs", async (req, res) => {

    try {

        const jobs = await Job.find();

        res.status(200).json(jobs);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Get All Applications

router.get("/applications", async (req, res) => {

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

// Get All Events

router.get("/events", async (req, res) => {

    try {

        const events = await Event.find();

        res.status(200).json(events);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Get All Feedback

router.get("/feedback", async (req, res) => {

    try {

        const feedback = await Feedback.find();

        res.status(200).json(feedback);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Delete User

router.delete("/users/:id", async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);

        res.json({
            message: "User Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Delete Job

router.delete("/jobs/:id", async (req, res) => {

    try {

        await Job.findByIdAndDelete(req.params.id);

        res.json({
            message: "Job Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Delete Event

router.delete("/events/:id", async (req, res) => {

    try {

        await Event.findByIdAndDelete(req.params.id);

        res.json({
            message: "Event Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Delete Feedback

router.delete("/feedback/:id", async (req, res) => {

    try {

        await Feedback.findByIdAndDelete(req.params.id);

        res.json({
            message: "Feedback Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});
module.exports = router;