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

module.exports = router;