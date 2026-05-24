const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const upload = multer();

// middleware (IMPORTANT)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("PIF API is running");
});

app.post("/submit", upload.any(), (req, res) => {
  try {
    console.log("Form Data:", req.body);
    console.log("Files:", req.files);

    return res.json({
      success: true,
      message: "Form received successfully"
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

module.exports = app;