const { number } = require("joi");
const mongoose = require("mongoose");

const emotionalScores = new mongoose.Schema({
  fear: Number,
  anger: Number,
  sadness: Number,
  joy: Number,
  surprise: Number,
  disgust: Number,
});
const emotionAnalysis = new mongoose.Schema({
  emotions_detected: [String],
  emotion_scores: emotionalScores,
  result_code: Number,
  result_msg: String,
});
const journalSchema = new mongoose.Schema({
  dayDescription: {
    type: String,
    required: true,
    max: 254,
  },
  emotionAnalysis: emotionAnalysis,
  productivityRange: {
    type: Number,
  },
  hasExercised: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  username: {
    type: String,
    required: true,
    min: 6,
    max: 16,
  },
});

module.exports = mongoose.model("Journal", journalSchema);
