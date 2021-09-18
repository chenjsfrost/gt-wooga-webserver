const express = require("express");
const Question = require("../models/question");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let qns = new Question(req.body);
    qns = await qns.save();
    res.status(200).json({
      status: 200,
      data: qns,
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
    let qns = await Question.find();
    res.status(200).json({
      status: 200,
      data: qns,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.patch("/:postId", async (req, res) => {
    try {
      let qns = await Question.findByIdAndUpdate(req.params.postId, req.body, {
        new: true,
      });
      if (qns) {
        res.status(200).json({
          status: 200,
          data: qns,
        });
      }
      res.status(400).json({
        status: 400,
        message: "Question is invalid",
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
  });
  
  router.delete("/:postId", async (req, res) => {
    try {
      let qns = await Question.findByIdAndRemove(req.params.postId);
      if (qns) {
        res.status(200).json({
          status: 200,
          message: "Question has been deleted successfully",
        });
      } else {
        res.status(400).json({
          status: 400,
          message: "Question is invalid",
        });
      }
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
  });

module.exports = router;
