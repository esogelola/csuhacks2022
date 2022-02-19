const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({

    dayDescription:{
        type: String,
        required: true,
        max:254
    },
    productivityRange:{
        type: Number
    },
    hasExcercised:{
        type:Boolean
    }
})

module.exports = mongoose.model("Journal", journalSchema);
