const express = require("express");
const router = express.Router();
const multer = require("multer");

const uploadDestination = "uploads";

// Показываем, где хранить файлы
const storage = multer.diskStorage({
  destination: uploadDestination,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

/* GET home page. */
router.get("/register", (req, res, next) => {
  res.send("register");
});

module.exports = router;
