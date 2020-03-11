const getChildrenQuery = require("../database/queries/getChildren");

const getChildren = (req, res) => {
  getChildrenQuery(9)
    .then(childs => {
      res.send(childs.map(a => a.name));
    })
    .catch(err => res.send("err"));
};

module.exports = getChildren;
