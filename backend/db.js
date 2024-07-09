require("dotenv").config();
const mysql = require("mysql2");

let db_con = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: "avnadmin",
  password: process.env.DB_PASS,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
  // host: "127.0.0.1",
  // port: 3306,
  // user: "root",
  // password: '12345',
  // database: 'kanban',
});

db_con.on('error', (err) => {
  console.error('MySQL pool error:', err);
  // Handle error gracefully, possibly attempt to reconnect or log for debugging
});


module.exports = db_con;
