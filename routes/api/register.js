require("dotenv").config();
const express = require("express");
const router = express.Router();

const User = require("../../models/user");

//Create user (Register User)
router.post("/", async (req, res, next) => {
  const { name, email, password } = req.body;

  //Simple validation
  if (!name || !email || !password) {
    return res.status(400).send({ msg: "Please fillout all fields!" });
  }

  try {
    const newUser = new User({
      name,
      email,
      password,
    });

    const response = await newUser.save();

    res.status(201).send({
      message: "User signup success!",
      _id: response._id,
      email: response.email,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      message: "Error, user signup unsuccessful!",
      error: error,
    });
  }
});

module.exports = router;
