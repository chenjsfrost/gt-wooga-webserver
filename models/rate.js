const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let rateSchema = new Schema(
    {
      rate: {
        type: Number,
        required: true,
      },
    },
  );
  
  let Rate = mongoose.model("rate", rateSchema);
  
  module.exports = Rate;