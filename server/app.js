const express = require("express");
const path = require("path");
const app = express();
const router = require("./controllers");
const server = require("http").createServer(app);

app.use(express.static(path.join(__dirname, "..", "client", "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  // console.log(req.url, "55555555555555");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use("/api", router);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

module.exports = server;
