const mongoose = require("mongoose");

const sushibarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
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
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Sushibar", sushibarSchema);
