import psycopg2 as pg
from flask import *
import os

app = Flask(__name__)

conn = pg.connect(dbname="eymymdky",
                  user="eymymdky",
                  password="z5RIT9jYL-nTlgUIxcer-_w4iOZZk3Rq",
                  host="lallah.db.elephantsql.com",
                  port=5432)

cursor = conn.cursor()

@app.route("/")
def main_page():
    return send_file("./browser/home.html")

@app.route("/data")
def get_data():
    query = "SELECT * FROM people"
    cursor.execute(query)

    rows = cursor.fetchall()
    for row in rows:
        print(list(row))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
