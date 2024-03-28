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
    assignee_id,
  } = req.body;
  console.log(req.body);

  const query = `INSERT INTO assignee_members(card_id, user_id, username) values ?`;

  db_con.query(
    `INSERT INTO card(title, description, column_id, start_date, due_date, department, priority) values("${title}","${description}", "${column_id}", "${start_date}", "${due_date}", "${department}" ,"${priority}")`,
    (error, result) => {
      if (error) console.log(error);
      db_con.query("select last_insert_id()", (error, result) => {
        if (error) throw error;
        if (assignee_id !== "") {
          const assigneeData = assignee_id.map((assignee) => [
            result[0]["last_insert_id()"],
            assignee.user_id,
            assignee.username,
          ]);
          console.log(assigneeData);
          db_con.query(query, [assigneeData], (error, results, fields) => {
            if (error) {
              console.error("Error inserting data: " + error.message);
              return;
            }
            console.log("Rows inserted: " + results.affectedRows);
          });
        }
      });
    }
  );
});

router.post("/delete", (req, res) => {
  const { card_id } = req.body;
  db_con.query(`delete from card where card_id = ${card_id}`);
});
module.exports = router;
