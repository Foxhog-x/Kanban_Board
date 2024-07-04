const db_con = require("../db");

const getAllCards = (req, res) => {
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

      // `SELECT
      //     card.*,
      //     GROUP_CONCAT(labels.label_name) AS labels_name,
      //     GROUP_CONCAT(DISTINCT assignee_members.username) AS assign_users
      // FROM
      //     card
      // LEFT JOIN
      //     labels ON card.card_id = labels.card_id
      // LEFT JOIN
      //     assignee_members ON card.card_id = assignee_members.card_id
      // GROUP BY
      //     card.card_id`,
      //       `SELECT
      //     card.*,
      //     GROUP_CONCAT(labels.label_name) AS labels_name,
      //     GROUP_CONCAT(DISTINCT assignee_members.username) AS assign_users,
      //     html_content.content AS html_content
      // FROM
      //     card
      // LEFT JOIN
      //     labels ON card.card_id = labels.card_id
      // LEFT JOIN
      //     assignee_members ON card.card_id = assignee_members.card_id
      // LEFT JOIN
      //     html_content ON card.card_id = html_content.card_id
      // GROUP BY
      //     card.card_id`,
      `SELECT
        card.*,
        GROUP_CONCAT(labels.label_name) AS labels_name,
        GROUP_CONCAT(DISTINCT assignee_members.username) AS assign_users,
        (SELECT content FROM html_content WHERE card_id = card.card_id) AS html_content
    FROM
        card
    LEFT JOIN
        labels ON card.card_id = labels.card_id
    LEFT JOIN
        assignee_members ON card.card_id = assignee_members.card_id
    GROUP BY
        card.card_id`,

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
};

const createCard = (req, res) => {
  const {
    title,
    description,
    column_id,
    start_date,
    due_date,
    department,
    priority,
    assignee_id,
    addLabelList,
  } = req.body;
  console.log(req.body);
  const queryAssign = `INSERT INTO assignee_members(card_id, user_id, username) values ?`;
  const queryHtml = "INSERT INTO html_content (card_id, content) VALUES (?, ?)";
  const queryCard = `INSERT INTO card(title, column_id, start_date, due_date, department, priority) values(?,?,?,?,?,?)`
  db_con.query(
    queryCard, [title, column_id, start_date, due_date, department, priority],
    (error, result) => {
      if (error) {
        console.error("Error inserting card:", error);
        return res
          .status(500)
          .json({ success: false, message: "Error inserting card" });
      }

      db_con.query("select last_insert_id()", (error, result) => {
        if (error) {
          console.error("Error getting last insert id:", error);
          return res
            .status(500)
            .json({ success: false, message: "Error getting last insert id" });
        }

        const card_id = result[0]["last_insert_id()"];

        if (assignee_id && assignee_id.length > 0) {
          const assigneeData = assignee_id.map((assignee) => [
            card_id,
            assignee.user_id,
            assignee.username,
          ]);

          db_con.query(query, [assigneeData], (error, results) => {
            if (error) {
              console.error("Error inserting assignee members:", error);
              return res.status(500).json({
                success: false,
                message: "Error inserting assignee members",
              });
            }
            console.log("Assignee members inserted: " + results.affectedRows);
          });
        }

        if (addLabelList && addLabelList.length > 0) {
          console.log(addLabelList);
          const insertLabels = addLabelList.map((label) => [label, card_id]);
          console.log(insertLabels);
          db_con.query(
            "INSERT INTO labels(label_name, card_id) VALUES ?",
            [insertLabels],
            (error, result) => {
              if (error) {
                console.error("Error inserting labels:", error);
                return res
                  .status(500)
                  .json({ success: false, message: "Error inserting labels" });
              }
              console.log("Labels inserted: " + result.affectedRows);
            }
          );
        }

        const htmlContent = description;
        if (description !== "") {
          db_con.query(queryHtml, [card_id, htmlContent], (error, results) => {
            if (error) {
              console.error("Error inserting HTML content:", error);
              return res.status(500).json({
                success: false,
                message: "Error inserting HTML content",
              });
            }
            console.log("HTML content inserted successfully!");
          });
        }

        res
          .status(200)
          .json({ success: true, message: "Card created successfully" });
      });
    }
  );
}
const updateCard = (req, res) => {
  const { card_id, data } = req.body
  const updateHtmlContentQuery = `UPDATE html_content SET content = ? WHERE card_id = ? `
  db_con.query(updateHtmlContentQuery, [data, card_id], (error, response) => {
    if (error) { res.status(500).json({ data: error.message }) }
    res.status(200).json({ success: true })
  })
}

const deleteSingleCard = (req, res) => {
  const { card_id } = req.body;
  console.log(card_id);
  db_con.query(
    `delete from card where card_id = ${card_id}`,
    (error, results) => {
      if (error) res.send(error);
      if (results) {
        res.json({ success: true, message: "successfully Deleted" });
      }
    }
  );
};
module.exports = { getAllCards, createCard, updateCard, deleteSingleCard };
