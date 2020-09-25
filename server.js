const { Pool } = require("pg");
const express = require("express");
const helmet = require("helmet");
const path = require("path");

const pool = new Pool({
  user: "eymymdky",
  host: "lallah.db.elephantsql.com",
  database: "eymymdky",
  password: "z5RIT9jYL-nTlgUIxcer-_w4iOZZk3Rq",
  port: 5432
});

pool.on("error", (err, client) => {
  console.error(err);
  process.exit(-1);
});

const app = express();
const port = 5000;

app.use(express.static("./browser"));
app.use(helmet());

app.get("/", (req, res) => {
  res.sendFile("home.html", { root: __dirname+"\\browser" });
});

app.get("/get_data", (req, res) => {
  res.send(200);
})

console.log("Listening on port ", port);
app.listen(port);
