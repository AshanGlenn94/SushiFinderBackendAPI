const express = require("express");
const router = express.Router();
const Rating = require("../../models/rating");

//Get all
router.get("/", async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get one
router.get("/:id", getRating, (req, res) => {
  res.json(res.rating);
});

//Create one
router.post("/", async (req, res) => {
  const rating = new Rating({
    name: req.body.name,
    email: req.body.email,
    restaurant: req.body.restaurant,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  try {
    const newRating = await rating.save();
    res.status(201).json(newRating);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

//Update one
router.patch("/:id", getRating, async (req, res) => {
  if (req.body.name != null) {
    res.rating.name = req.body.name;
  }
  if (req.body.email != null) {
    res.rating.email = req.body.email;
  }
  if (req.body.restaurant != null) {
    res.rating.restaurant = req.body.restaurant;
  }
  if (req.body.rating != null) {
    res.rating.rating = req.body.rating;
  }
  if (req.body.comment != null) {
    res.rating.comment = req.body.comment;
  }
  try {
    const updatedRating = await res.rating.save();
    res.json(updatedRating);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete one
router.delete("/:id", getRating, async (req, res) => {
  try {
    await res.rating.remove();
    res.json({ message: "Deleted Rating" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getRating(req, res, next) {
  let rating;
  try {
    rating = await Rating.findById(req.params.id);
    if (rating == null) {
      return res.status(404).json({ message: "Cannot find rating" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.rating = rating;
  next();
}

module.exports = router;
