const express = require("express");
const db_con = require("../../db");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body.board_id);
  try {
    db_con.query(
      // `SELECT List_Column.*, Card.*
      //   FROM List_Column
      //   LEFT JOIN Card ON List_Column.column_id = Card.column_id
      //   WHERE List_Column.board_id = 1`,
      // `SELECT card.*, GROUP_CONCAT(assignee_members.username) as usernames
      // FROM list_column
      // LEFT JOIN card ON list_column.column_id = card.column_id
      // LEFT JOIN assignee_members ON card.card_id = assignee_members.card_id
      // GROUP BY assignee_members.card_id`,

      // `select card.*, GROUP_CONCAT(assignee_members.username) as assign_users  from card right join assignee_members ON assignee_members.card_id = card.card_id group by assignee_members.card_id;`,
      `SELECT 
      card.*, 
      GROUP_CONCAT(labels.label_name) AS labels_name, 
      GROUP_CONCAT(DISTINCT assignee_members.username) AS assign_users 
  FROM 
      card 
  LEFT JOIN 
      labels ON card.card_id = labels.card_id 
  LEFT JOIN 
      assignee_members ON card.card_id = assignee_members.card_id 
  GROUP BY 
      card.card_id; 
  `,
      (error, result) => {
        if (error) res.send(error);
        if (result) {
          res.send(result);
        }
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
