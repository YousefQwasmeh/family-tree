const express = require("express");
const router = express.Router();
const getChildren = require("./getChildren");
const getParents = require("./getParents");
const getTree = require("./getTree");
const getPerson = require("./getPerson");
router.get("/", (req, res) => {
  res.send("00000");
});
router.get("/parents/childId", getParents);
router.get("/children/parentId", getChildren);
router.get("/tree/:rootId", getTree);
router.get("/person/:personId", getPerson);
module.exports = router;
