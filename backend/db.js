require("dotenv").config();
const mysql = require("mysql2");

let db_con = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: "avnadmin",
  password: process.env.DB_PASS,
  database: process.env.DATABASE,
});

db_con.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("connected to Database");
  }
});

module.exports = db_con;
