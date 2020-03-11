const dbConnection = require("../dbConnection");
const getChildren = parentId =>
  dbConnection
    .query(
      "select * from child_parent inner join person on (child_parent.child_id = person.id) where parent_id = $1",
      [parentId]
    )
    .then(res => res.rows)
    .catch(err => err);

module.exports = getChildren;
