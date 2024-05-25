const express = require("express");
const db_con = require("../../db");
const extractContent = require("./test");
const router = express.Router();
const cardController = require("../../controllers/cardcontroller");

router.post("/", cardController.getAllCards);
//   try {
//     db_con.query(
//       // `SELECT List_Column.*, Card.*
//       //   FROM List_Column
//       //   LEFT JOIN Card ON List_Column.column_id = Card.column_id
//       //   WHERE List_Column.board_id = 1`,
//       // `SELECT card.*, GROUP_CONCAT(assignee_members.username) as usernames
//       // FROM list_column
//       // LEFT JOIN card ON list_column.column_id = card.column_id
//       // LEFT JOIN assignee_members ON card.card_id = assignee_members.card_id
//       // GROUP BY assignee_members.card_id`,

//       // `SELECT
//       //     card.*,
//       //     GROUP_CONCAT(labels.label_name) AS labels_name,
//       //     GROUP_CONCAT(DISTINCT assignee_members.username) AS assign_users
//       // FROM
//       //     card
//       // LEFT JOIN
//       //     labels ON card.card_id = labels.card_id
//       // LEFT JOIN
//       //     assignee_members ON card.card_id = assignee_members.card_id
//       // GROUP BY
//       //     card.card_id`,
//       //       `SELECT
//       //     card.*,
//       //     GROUP_CONCAT(labels.label_name) AS labels_name,
//       //     GROUP_CONCAT(DISTINCT assignee_members.username) AS assign_users,
//       //     html_content.content AS html_content
//       // FROM
//       //     card
//       // LEFT JOIN
//       //     labels ON card.card_id = labels.card_id
//       // LEFT JOIN
//       //     assignee_members ON card.card_id = assignee_members.card_id
//       // LEFT JOIN
//       //     html_content ON card.card_id = html_content.card_id
//       // GROUP BY
//       //     card.card_id`,
//       `SELECT
//     card.*,
//     GROUP_CONCAT(labels.label_name) AS labels_name,
//     GROUP_CONCAT(DISTINCT assignee_members.username) AS assign_users,
//     (SELECT content FROM html_content WHERE card_id = card.card_id) AS html_content
// FROM
//     card
// LEFT JOIN
//     labels ON card.card_id = labels.card_id
// LEFT JOIN
//     assignee_members ON card.card_id = assignee_members.card_id
// GROUP BY
//     card.card_id`,

//       (error, result) => {
//         if (error) res.send(error);
//         if (result) {
//           res.send(result);
//         }
//       }
//     );
//   } catch (error) {
//     res.send(error);
//   }
// });

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
  // console.log(req.body, " this req body");

  const query = `INSERT INTO assignee_members(card_id, user_id, username) values ?`;
  // const data = extractContent(req.body.description);
  const sql = "INSERT INTO html_content (card_id, content) VALUES (?, ?)";
  db_con.query(
    `INSERT INTO card(title, column_id, start_date, due_date, department, priority) values("${title}", "${column_id}", "${start_date}", "${due_date}", "${department}" ,"${priority}")`,
    (error, result) => {
      if (error) console.log(error);
      db_con.query("select last_insert_id()", (error, result) => {
        const card_id = result[0]["last_insert_id()"];
        if (error) throw error;
        if (assignee_id !== "") {
          const assigneeData = assignee_id.map((assignee) => [
            result[0]["last_insert_id()"],
            assignee.user_id,
            assignee.username,
          ]);

          db_con.query(query, [assigneeData], (error, results, fields) => {
            if (error) {
              console.error("Error inserting data: " + error.message);
              return;
            }
            console.log("Rows inserted: " + results.affectedRows);
          });
        }

        const htmlContent = description;
        if (description !== "") {
          db_con.query(
            sql,
            [card_id, htmlContent],
            (error, results, fields) => {
              if (error) {
                console.error("Error inserting HTML content:", error);
                return;
              }
              console.log("HTML content inserted successfully!");
            }
          );
        }
      });
    }
  );
});

router.post("/delete", cardController.deleteSingleCard);
module.exports = router;
