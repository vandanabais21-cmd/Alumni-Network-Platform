const express = require("express");
const router = express.Router();

const EventRegistration = require("../models/EventRegistration");

// Register Event
router.post("/", async(req,res)=>{

    try{

        const {userId,eventId}=req.body;

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

module.exports=router;