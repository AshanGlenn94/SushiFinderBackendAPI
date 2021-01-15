const mongoose = require("mongoose");

const sushibarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  menu: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Sushibar", sushibarSchema);
