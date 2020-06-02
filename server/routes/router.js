const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("The server is started ... ");
});

module.exports = router;
