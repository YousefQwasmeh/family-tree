const getParentsQuery = require("../database/queries/getParents");

const getParents = (req, res) => {
  getParentsQuery(req.params.childId)
    .then(parents => {
      res.send(parents.map(a => a.name));
    })
    .catch(err => res.send("err"));
};

module.exports = getParents;
