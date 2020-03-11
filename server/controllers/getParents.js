const getParentsQuery = require("../database/queries/getParents");

const getParents = (req, res) => {
  getParentsQuery(11)
    .then(parents => {
      res.send(parents.map(a => a.name));
    })
    .catch(err => res.send("err"));
};

module.exports = getParents;
