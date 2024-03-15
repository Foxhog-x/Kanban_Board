const express = require("express");
const db_con = require("../../db");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body.board_id, "req");
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
router.post("/create", (req, res) => {
  console.log(req.body);
  db_con.query("INSERT");
});

module.exports = router;
