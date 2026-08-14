const mongoose = require("mongoose");

const ShortnerSchema = mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  userInfo: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  visitHistory: [
    {
      visitTime: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

module.exports = mongoose.model("shortner", ShortnerSchema);
