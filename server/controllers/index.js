const express = require("express");
const router = express.Router();
const getChildren = require("./getChildren");
const getParents = require("./getParents");
const getTree = require("./getTree");
router.get("/", (req, res) => {
  res.send("00000");
});
router.get("/get-parents", getParents);
router.get("/get-children", getChildren);
router.get("/get-tree", getTree);
module.exports = router;
