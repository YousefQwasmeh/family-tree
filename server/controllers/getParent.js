const getParentQuery = require("../database/queries/getParent");

const getParent = (req, res) => {
  getParentQuery(req.params.childId)
    .then(parent => {
      res.send(parent);
    })
    .catch(err => res.send("err"));
};

module.exports = getParent;
