const getPersonQuery = require("../database/queries/getPerson");

const getPerson = (req, res) => {
  getPersonQuery(req.params.personId)
    .then(person => {
      res.send(person);
    })
    .catch(err => res.send("err"));
};

module.exports = getPerson;
