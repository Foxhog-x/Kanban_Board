const express = require("express");
const router = express.Router();
const db_con = require("../db");
const bcrypt = require("bcrypt");
const path = require("path");

// const pathname = path.join(__dirname, "/usersdata/user.json");
// const userData = require("./usersdata/user.json");
// const { error } = require("console");

router.post("/", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const username = firstName + "_" + lastName;
  const salt = await bcrypt.genSalt(10);
  const secretPassword = await bcrypt.hash(password, salt);

  const sql = `SELECT *   FROM user WHERE email = "${email}"`;

  db_con.query(sql, (error, results) => {
    if (error) res.status(401);
    if (results) {
      if (results.length === 0) {
        db_con.query(
          `INSERT INTO user (username, email, password, role, first_name, last_name) values ("${username}", "${email}", "${secretPassword}","${"Regular User"}", "${firstName}", "${lastName}")`,
          (error, results) => {
            if (error) console.log(error);
            if (results) {
              console.log("Inserted " + results.affectedRows + " row(s)");
              res.status(201).json({
                message: "data saved successfully",
              });
            }
          }
        );
      } else {
        console.log("user already existed");
        res.status(401).json({ message: "user already existed" });
      }
    }
  });
});

module.exports = router;
