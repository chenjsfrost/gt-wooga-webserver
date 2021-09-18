const express = require("express");
const Response = require("../models/response");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let responses = new Response(req.body);
    responses = await responses.save();
    res.status(200).json({
      status: 200,
      data: responses,
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
    let responses = await Response.find();
    res.status(200).json({
      status: 200,
      data: responses,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

module.exports = router;
