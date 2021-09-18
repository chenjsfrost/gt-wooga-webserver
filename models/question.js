const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let qnsSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
        },
        placeHolder: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
            enum: [
                'short answer',
                'email',
                'linear scale'
            ],
        },
    },
  );
  
  let Question = mongoose.model("question", qnsSchema);
  
  module.exports = Question;