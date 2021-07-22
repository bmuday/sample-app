const express = require("express");
const PORT = process.env.PORT || 5000;

// Middlewares
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("<h1>My node app</h1>");
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
