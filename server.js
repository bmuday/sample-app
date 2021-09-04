const express = require("express");
const PORT = process.env.PORT || 8080;

// Middlewares
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Docker is easy!</h1>");
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
