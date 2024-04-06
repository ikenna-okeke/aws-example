const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

// body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("Success!");
});

app.listen(port, "0.0.0.0");
console.log(`Ranning on http://0.0.0.0:${port}`);
