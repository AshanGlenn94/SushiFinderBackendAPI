require("dotenv").config();
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  //Check for token
  if (!token)
    res.status(401).json({ msg: "Access Denied, user unauthorized!" });

  try {
    //Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid!" });
  }
}

module.exports = auth;
