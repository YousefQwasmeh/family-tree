const getChildrenQuery = require("../database/queries/getChildren");
let tree = {};
const getChildren = childId => {
  return getChildrenQuery(childId)
    .then(children => {
      tree[childId] = children;
      return Promise.all(children.map(child => getChildren(child.child_id)));
    })
    .catch(err => err);
};

const getTree = (req, res) => {
  tree = {};
  getChildren(req.params.rootId)
    .then(a => res.send(tree))
    .catch(err => res.send("err"));
};

module.exports = getTree;
