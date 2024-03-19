const express = require("express");
const db_con = require("../../db");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body.board_id);
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
  const {
    title,
    description,
    column_id,
    start_date,
    due_date,
    department,
    priority,
  } = req.body;
  db_con.query(
    `INSERT INTO card(title, description, column_id, start_date, due_date, priority) values("${title}","${description}", "${column_id}", "${start_date}", "${due_date}", "${department}" "${priority}")`,
    (error, result) => {
      if (error) console.log(error);
      if (result) {
        console.log(result);
        console.log("data save successfully");
      }
    }
  );
});

module.exports = router;
