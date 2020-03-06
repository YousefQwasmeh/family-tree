const fs = require("fs");
const dbConnection = require("./dbConnection");

const dbBuild = () => {
  const createDataBase = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString();
  const initDummyDate = fs
    .readFileSync(`${__dirname}/initValue.sql`)
    .toString();

  dbConnection
    .query(createDataBase)
    .then(() => {
      console.log("the database was created successfully");
      dbConnection
        .query(initDummyDate)
        .then(() => console.log("The data has been inserted successfully"))
        .catch(err => console.log(err, "insert data is failed"));
    })
    .catch(err => console.log(err, "create database is failed"));
};
// dbBuild();
module.exports = dbBuild;
