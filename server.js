import { Pool } from "pg";

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

pool.connect((err, client, done) => {
  if (err) throw err;
  client.query("SELECT * FROM people", (err, res) => {
    done();

    if (err) {
      console.log(err.stack);
    } else {
      for (let row of res.rows) {
        console.log(row);
      }
    }
  })
})
