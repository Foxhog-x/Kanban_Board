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
module.exports = { getAllCards, deleteSingleCard };
