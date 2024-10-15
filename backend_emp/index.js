const express = require("express");
const app = express();
const cors = require("cors"); // Cross Origin Resource Sharing

app.use(cors());
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_NAME).then(() => {
  console.log("Database connected");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("This is the landing page, with additional routes");
  console.log(process.env.NODE_ENV);
});

const empRoutes = require("./routes/employeeRoutes");
app.use("/emp", empRoutes);
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
