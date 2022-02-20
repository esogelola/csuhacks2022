// Import User model here
const { default: axios } = require("axios");
const { Journal } = require("../models");

const getEmotionAnalysis = async (text) => {
  console.log(text);
  var options = {
    method: "GET",
    url: "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/",
    params: { text: text },
    headers: {
      "x-rapidapi-host": process.env.x_rapidapi_host,
      "x-rapidapi-key": process.env.x_rapidapi_key,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
exports.getAll = async (req, res) => {
  const username = req.body.username;
  console.log(req.body);
  try {
    if (username) {
      const journal = await Journal.find({ username: username });

      res.status(200).json({
        error: null,
        journal: journal,
      });
    } else {
      res.status(400).json({ error: "userId must be defined" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getOne = async (req, res) => {
  const journalId = req.body._id;

  try {
    if (journalId) {
      const journal = await Journal.find({ _id: journalId });

      res.status(200).json({
        error: null,
        journal: journal,
      });
    } else {
      res.status(400).json({ error: "journal ID must be defined" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.create = async (req, res) => {
  const journalText = req.body.dayDescription;

  if (journalText) {
    let emotionAnalysis = {};
    await getEmotionAnalysis(journalText).then((value) => {
      emotionAnalysis = value;
    });

    const newJournal = new Journal({
      userId: req.body.userId,
      dayDescription: journalText,
      username: req.body.username,
      emotionAnalysis: {
        emotions_detected: emotionAnalysis.emotions_detected,
        emotion_scores: emotionAnalysis.emotion_scores,
        result_code: emotionAnalysis.result_code,
        result_msg: emotionAnalysis.result_msg,
      },
      productivityRange: req.body.productivityRange,
      hasExercised: req.body.hasExercised,
    });
    try {
      const savedJournal = await newJournal.save();

      res.json({ error: null, data: { journal: savedJournal } });
    } catch (error) {
      res.status(400).json({ error: `${error} - Could not save` });
    }
  } else {
    res.status(400).json({ error: "No journal text" });
  }
};

exports.status = (req, res) => {
  res.json({
    message: "OK",
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
};
