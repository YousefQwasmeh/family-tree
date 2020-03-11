const dbConnection = require("../dbConnection");
// const parents = [];
const getParents = (parentId, parents = []) =>
  !parentId
    ? []
    : dbConnection
        .query(
          "select * from child_parent inner join person on (child_parent.parent_id = person.id) where child_id = $1",
          [parentId]
        )
        .then(res => {
          if (res.rows.length) parents.push(res.rows[0]);
          return res.rows.length
            ? getParents(res.rows[0].parent_id, parents)
            : parents;
        })
        .catch(err => err);

module.exports = getParents;
