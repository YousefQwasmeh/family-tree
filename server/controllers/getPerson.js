const getPersonQuery = require("../database/queries/getPerson");

const getPerson = (req, res) => {
  getPersonQuery(7)
    .then(person => {
      res.send(person);
    })
    .catch(err => res.send("err"));
};

module.exports = getPerson;
