require("dotenv").config();
const mysql = require("mysql2");

let db_con = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: "avnadmin",
  password: process.env.DB_PASS,
  database: process.env.DATABASE,
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0,
  // host: "127.0.0.1",
  // port: 3306,
  // user: "root",
  // password: "",
  // database: "kanban",
});

db_con.on("error", (err) => {
  console.error("MySQL pool error:", err);
});

db_con.getConnection((error, connection) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database connected successfully");
    connection.release();
  }
});
module.exports = db_con;
