const express = require("express");
const router = express.Router();
const db_con = require("../db");

const path = require("path");
// const pathname = path.join(__dirname, "/usersdata/user.json");
// const userData = require("./usersdata/user.json");
// const { error } = require("console");

router.post("/", (req, res) => {
  const firstName = req.body.firstName.trim();
  const lastName = req.body.lastName.trim();
  const username = firstName + "_" + lastName;
  const { email, password } = req.body;
  try {
    db_con.query(
      `INSERT INTO User(username, email, password, role) values ("${username}", "${email}", "${password}", "Regular User" )`,
      (error, result) => {
        if (error) console.log(error);
        console.log("successfully inserted");
      }
    );
  } catch (error) {
    console.log(error);
  }
  // try {
  //   db_con.query(`select user_id, username from User`, (err, result) => {
  //     if (err) console.log(err);
  //     const jsonObj = JSON.stringify(result);
  //     fs.writeFileSync(pathname, jsonObj, "utf8", (err, data) => {
  //       if (err) res.status(301).json({ message: "false" });
  //     });
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
  try {
    db_con.query(`select user_id, username from User`, (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
