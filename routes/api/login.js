require("dotenv").config();
const express = require("express");
const router = express.Router();

const User = require("../../models/user");

router.post("/", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.send({ msg: "Please enter username & password!" });
  try {
    const user = await User.findOne(
      { email, password },
      "user login authorized!"
    );
    if (user) {
      res.json({
        message: "Success",
        found: true,
        data: user,
      });
    } else {
      res.json({
        message: "email/password is invalid",
        found: false,
      });
    }
  } catch (e) {
    console.log("error occured");
    res.status(400).send({
      message: "Request error",
      error: e,
    });
  }
});

module.exports = router;
