const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Check Check");
});

app.post("/message", (req, res) => {
  console.log("Received:", req.body);
  res.send("Message received successfully!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});