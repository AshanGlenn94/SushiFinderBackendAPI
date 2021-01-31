const express = require("express");
const router = express.Router();
const Sushibar = require("../../models/sushibar");


//Get all
router.get("/", async (req, res) => {
  try {
    const sushibars = await Sushibar.find();
    res.json(sushibars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get one
router.get("/:id", getSushibar, (req, res) => {
  res.json(res.sushibar);
});

//Create one
router.post("/", async (req, res) => {
  const sushibar = new Sushibar({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    restaurant: req.body.restaurant,
    rating: req.body.rating,
  });
  try {
    const newSushibar = await sushibar.save();
    res.status(201).json(newSushibar);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

//Update one
router.patch("/:id", getSushibar, async (req, res) => {
  if (req.body.title != null) {
    res.sushibar.title = req.body.title;
  }
  if (req.body.price != null) {
    res.sushibar.price = req.body.price;
  }
  if (req.body.image != null) {
    res.sushibar.image = req.body.image;
  }
  if (req.body.restaurant != null) {
    res.sushibar.restaurant = req.body.restaurant;
  }
  if (req.body.rating != null) {
    res.sushibar.rating = req.body.rating;
  }
  try {
    const updatedSushibar = await res.sushibar.save();
    res.json(updatedSushibar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete one
router.delete("/:id", getSushibar, async (req, res) => {
  try {
    await res.sushibar.remove();
    res.json({ message: "Deleted Sushibar" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSushibar(req, res, next) {
  let sushibar;
  try {
    sushibar = await Sushibar.findById(req.params.id);
    if (sushibar == null) {
      return res.status(404).json({ message: "Cannot find SushiBar" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.sushibar = sushibar;
  next();
}

module.exports = router;
