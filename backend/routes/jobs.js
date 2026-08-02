const express = require("express");
const router = express.Router();

const Job = require("../models/Job");

// Add Job API
router.post("/add", async (req, res) => {

    try {

        const { company, jobTitle, location, salary, description } = req.body;

        const newJob = new Job({
            company,
            jobTitle,
            location,
            salary,
            description
        });

        await newJob.save();

        res.status(201).json({
            message: "Job Added Successfully",
            job: newJob
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Get All Jobs API
router.get("/", async (req, res) => {

    try {

        const jobs = await Job.find();

        res.status(200).json(jobs);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;