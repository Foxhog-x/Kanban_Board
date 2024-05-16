const express = require("express");
const db_con = require("../../db");
const user_idMiddlewere = require("../../user_idMiddlewere");
// const { route } = require("./card");
const router = express.Router();
const secret = "mysecret";
var jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  try {
    db_con.query("select * from Board", (error, results) => {
      if (error) res.status(404).json({ message: error });
      if (results) {
        res.status(200).json({ results });
      }
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/create", user_idMiddlewere, (req, res) => {
  const { board_name, board_Type } = req.body;

  const board_Type_checked = board_Type === "Public" ? 0 : 1;

  db_con.query(
    `Insert into board (name, creator_id, status) values ("${board_name}", "${req.user_id.id}", "${board_Type_checked}")`,
    (error, results) => {
      if (error) {
        console.error("Error inserting HTML content:", error);
        return;
      }
      console.log("board Rows inserted: " + results.affectedRows);
    }
  );
});
module.exports = router;
