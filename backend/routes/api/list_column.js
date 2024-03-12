const express = require("express");
const db_con = require("../../db");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    db_con.query(
      "select * from List_Column where board_id = 1",
      (error, result) => {
        if (error) res.send(error);
        if (result) res.send(result);
      }
    );
  } catch (error) {
    res.send(error);
  }
  o;
});

module.exports = router;
