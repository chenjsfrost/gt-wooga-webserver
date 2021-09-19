const express = require("express");
const Rate = require("../models/rate");
const router = express.Router();

const generateBreakdown = (rates) => {
    const obj = {};
    rates.map((r) => {
        if (obj[r.rate]) {
            obj[r.rate] = obj[r.rate] + 1
        } else {
            obj[r.rate] = 1;
        }
    });
    return {
        rating_breakdown: obj,
    };
};

router.get("/", async (req, res) => {
    try {
        let rates = await Rate.find();
        const breakdown = generateBreakdown(rates);
        res.status(200).send(breakdown);
    } catch (err) {
        res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
});

module.exports = router;