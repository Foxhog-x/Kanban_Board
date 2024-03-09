const express = require("express");
const router = express.Router();
const db_con = require("../db");
router.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  try {
    db_con.query(
      `INSERT INTO site_users(email, password) values ("${email}", "${password}")`,
      (error, results) => {
        if (error) console.log(error);
        console.log("successfully inserted");
        res.send("works");
      }
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
