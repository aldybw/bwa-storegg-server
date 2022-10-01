var express = require("express");
var router = express.Router();
const { singup } = require("./controller");
const multer = require("multer");
const os = require("os");

router.post("/signup", multer({ dest: os.tmpdir() }).single("image"), singup);

module.exports = router;
