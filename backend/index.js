const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./models/dbConnection");

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
