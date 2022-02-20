// Import User model here
const { Journal } = require("../models");

exports.get = async (req, res)=>{
    

    const userId = req.body.userId;
    
    try
    {
        if (userId) {
            const journal = await Journal.find({userId: userId});
      
            res.status(200).json({
             error: null,
             journal: journal
            });
          } else {
            res.status(400).json({ error: "userId must be defined" });
          }
        
    }
    catch(error)
    {
        res.status(400).json({error});
    }

}


exports.create = async (req, res)=>{

    const journal = new Journal({
        userId: req.body.userId,
        dayDescription: req.body.dayDescription,
        productivityRange: req.body.productivityRange,
        hasExcercised: req.body.hasExcercised
      });
    
      //5 - Save new user to mongodb and return unique ID
      try {
        const savedJournal = await journal.save();
        res.json({ error: null, data: { journal: savedJournal } });
      } catch (error) {
        res.status(400).json({ error });
      }

}


exports.status = (req, res) => {
    res.json({
      message: "OK",
      timestamp: new Date().toISOString(),
      IP: req.ip,
      URL: req.originalUrl,
    });
  };

  



