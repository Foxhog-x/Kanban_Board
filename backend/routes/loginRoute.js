const express = require("express");
const router = express.Router();
const db_con = require("../db");
router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    db_con.query(
      `SELECT * FROM User WHERE email = "${email}"`,
      (error, results) => {
        if (error) console.log(error);
        db_con.query(
          `SELECT * FROM User WHERE email = "${email}" and password = "${password}"`,
          (err, result) => {
            if (err) console.log(err);

            if (result) {
              if (result.length !== 0) {
                console.log("successfull");
                res.status(200).json({ message: "successfully" });
              } else {
                console.log("not successfull");
                res.status(301).json({ message: "invalid credentials" });
              }
            }
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
