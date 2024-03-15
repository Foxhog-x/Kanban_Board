const express = require("express");
const db_con = require("../../db");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    db_con.query("select * from Board", (error, result) => {
      if (error) res.send(error);
      if (result) res.send(result);
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;