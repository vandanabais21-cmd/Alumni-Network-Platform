const express = require("express");
const router = express.Router();

const EventRegistration = require("../models/EventRegistration");

// Register Event
router.post("/", async(req,res)=>{

    try{

        const {userId,eventId}=req.body;

                // Check if already registered

        const existingRegistration = await EventRegistration.findOne({
            userId,
            eventId
        });

        if (existingRegistration) {

            return res.status(400).json({
                message: "You have already registered for this event"
            });

        }
        const registration=new EventRegistration({
            userId,
            eventId
        });

        await registration.save();

        res.status(201).json({
            message:"Event Registered Successfully"
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});

// Get Registered Events By User

router.get("/user/:userId", async (req, res) => {

    try {

        const registrations = await EventRegistration.find({
            userId: req.params.userId
        }).populate("eventId");

        res.status(200).json(registrations);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports=router;