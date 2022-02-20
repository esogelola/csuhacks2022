const { number } = require("joi");
const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
    
    userId:{
        type: Number,
        required: true,
    },
    dayDescription:{
        type: String,
        required: true,
        max:254
    },
    productivityRange:{
        type: Number
    },
    hasExercised:{
        type:Boolean
    }
})

module.exports = mongoose.model("Journal", journalSchema);
