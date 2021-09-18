const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let resSchema = new Schema(
    {
      response: {
          type: 'array',
          items: {
              type: 'object',
              properties: {
                  question: {
                      type: String,
                  },
                  answer: {
                      type: String,
                  },
              },
          },
      },
    },
  );
  
  let Response = mongoose.model("response", resSchema);
  
  module.exports = Response;