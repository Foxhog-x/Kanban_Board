const express = require("express");
const db_con = require("../../db");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    db_con.query(
      `SELECT List_Column.*, Card.*
        FROM List_Column
        LEFT JOIN Card ON List_Column.column_id = Card.column_id
        WHERE List_Column.board_id = 1`,
      (error, result) => {
        if (error) res.send(error);
        if (result) res.send(result);
      }
    );
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
