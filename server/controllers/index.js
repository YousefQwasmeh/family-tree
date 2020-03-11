const express = require("express");
const router = express.Router();
const getChildren = require("./getChildren");
const getParents = require("./getParents");
router.get("/", (req, res) => {
  res.send("00000");
});
router.get("/get-parents", getParents);
router.get("/get-children", getChildren);
module.exports = router;
