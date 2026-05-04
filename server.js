const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Check Check");
});

// contact route
app.post("/message", (req, res) => {
  console.log("Received:", req.body);
  res.send("Message received successfully!");
});

// IMPORTANT: use dynamic port for deployment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
