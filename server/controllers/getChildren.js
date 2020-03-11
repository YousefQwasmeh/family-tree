const getChildrenQuery = require("../database/queries/getChildren");

const getChildren = (req, res) => {
  getChildrenQuery(9)
    .then(childs => {
      // childs.map(a => {
      //   console.log(a);
      //   getChildrenQuery(a.child_id).then(c => console.log(c));
      // });
      res.send(childs.map(a => a.name));
    })
    .catch(err => res.send("err"));
};

module.exports = getChildren;
