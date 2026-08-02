const express = require("express");
const router = express.Router();

const Event = require("../models/Event");

// Add Event
router.post("/add", async(req,res)=>{

    try{

        const {title,date,location,description}=req.body;

        const newEvent=new Event({
            title,
            date,
            location,
            description
        });

        await newEvent.save();

        res.status(201).json({
            message:"Event Added Successfully",
            event:newEvent
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});

// Get All Events
router.get("/",async(req,res)=>{

    try{

        const events=await Event.find();

        res.status(200).json(events);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});

module.exports=router;