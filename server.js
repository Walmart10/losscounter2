import { Client } from "pg";

const client = new Client("postgres://eymymdky:z5RIT9jYL-nTlgUIxcer-_w4iOZZk3Rq@lallah.db.elephantsql.com:5432/eymymdky")

client.connect();

client.query("select * from people", (err, res) => {
  if (err) {
    throw err;
  } else {
    for (let row of res.rows) {
      console.log(row)
    }
    client.end();
  }
});
