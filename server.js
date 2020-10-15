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
	res.sendFile("home.html", {
		root: __dirname + "/browser"
	});
});

app.post("/get_data", (req, res) => {
	pool.query("select * from people", (error, response) => {
		if (error) {
			console.log(error.stack);
		} else {
			res.json(response.rows);
		}
	});
});

app.put("/put_data", (req, res) => {
	let loser = req.query.loser;
	let clicks = req.query.clicks;
	pool.query("update people set times = $1 where losers = $2", [clicks, loser], (error, response) => {
		if (error) {
			console.log(error.stack);
		}
	})
	res.sendStatus(200);
});

app.post("/get_amount", (req, res) => {
	let loser = req.query.loser;
	pool.query("select * from people where losers = $1", [loser], (error, response) => {
		if (error) {
			console.log(error.stack);
		} else {
			res.send(JSON.stringify(response.rows));
		}
	});
});

console.log("Listening on port", port);
app.listen(port);
