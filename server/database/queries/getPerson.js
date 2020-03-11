const dbConnection = require("../dbConnection");
const getPerson = id =>
  dbConnection
    .query("select * from person where id = $1", [id])
    .then(res => res.rows)
    .catch(err => err);

module.exports = getPerson;
