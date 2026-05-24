const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const upload = multer();

app.use(cors());

app.get("/", (req, res) => {
  res.send("PIF API is running");
});

app.post("/submit", upload.any(), (req, res) => {
  console.log("Form Data:", req.body);
  console.log("Files:", req.files);

  res.json({
    success: true,
    message: "Form received successfully"
  });
});

module.exports = app;
