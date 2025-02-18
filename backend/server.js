const express = require("express");
const mongoose = require("./database/config");
const { PORT } = require("./libs/config");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});
