const express = require("express");
const db_con = require("../../db");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    db_con.query("select * from Board", (error, results) => {
      if (error) res.status(404).json({ message: error });
      if (results) {
        res.status(200).json({ results });
      }
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
