const express = require("express");
const router = express.Router();
const db_con = require("../db");
router.post("/", (req, res) => {
  const email = req.body.email;
  try {
    db_con.query(
      `SELECT * FROM site_users WHERE email = "${email}"`,
      (error, results) => {
        if (error) console.log(error);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
