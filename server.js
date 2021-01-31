require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
app.use(cors());
app.use(express.json());
//Use Routes
app.use("/api/sushibars", require("./routes/api/sushibars"));
app.use("/api/register", require("./routes/api/register"));
app.use("/api/login", require("./routes/api/login"));
app.use("/api/ratings", require("./routes/api/ratings"));

//MAKE APP START LISTEN TO THE SERVER
app.listen(5000, () => console.log("Server Started"));
