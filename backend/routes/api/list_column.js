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
});

let positionArr = [];
router.post("/create", (req, res) => {
  const { createList_Obj } = req.body;
  const { name, board_id } = createList_Obj;
  console.log(name, board_id);
  db_con.query(
    `SELECT position From list_column where board_id = ${board_id}`,
    (error, result) => {
      if (error) console.log(error);
      for (let i = 0; i < result.length; i++) {
        const { position } = result[i];
        positionArr.push(position);
      }
      let newPostionInsert = positionArr.length + 1;
      db_con.query(
        `INSERT INTO list_column (name, board_id, position)values("${name}", ${board_id}, ${newPostionInsert});`,
        (error, result) => {
          if (error) console.log(error);
          console.log(result);
        }
      );
    }
  );
});

module.exports = router;
