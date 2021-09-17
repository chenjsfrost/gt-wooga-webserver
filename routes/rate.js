const express = require("express");
const Rate = require("../models/rate");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let rates = new Rate(req.body);
    rates = await rates.save();
    res.status(200).json({
      status: 200,
      data: rates,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    let rates = await Rate.find();
    res.status(200).json({
      status: 200,
      data: rates,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

module.exports = router;
