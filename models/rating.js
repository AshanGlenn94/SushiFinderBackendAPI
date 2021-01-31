const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  restaurant: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Rating", ratingSchema);
