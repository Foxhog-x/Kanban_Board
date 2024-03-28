const express = require("express");
const db_con = require("../../db");
const router = express.Router();

let positionArr = [];

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

router.post("/create", (req, res) => {
  const { createList_Obj } = req.body;
  console.log(createList_Obj, "createList api");
  const { name, board_id } = createList_Obj;
  console.log(board_id, "board_id");
  db_con.query(
    `SELECT position From list_column where board_id = 1`,
    (error, result) => {
      if (error) console.log(error);
      if (result) {
        for (let i = 0; i < result.length; i++) {
          const { position } = result[i];
          positionArr.push(position);
        }
        let newPostionInsert = positionArr.length + 1;
        db_con.query(
          `INSERT INTO list_column (name, board_id, position)values("${name}", 1, ${newPostionInsert});`,
          (error, result) => {
            if (error) console.log(error);
            console.log(result);
          }
        );
      }
    }
  );
});

router.post("/delete", (req, res) => {
  const { column_id } = req.body;
  db_con.query(
    `DELETE FROM list_column 
  WHERE column_id = ${column_id};`,
    (err, result) => {
      if (err) console.log(err);
      if (result) {
        res.status(200).json({ success: true });
        console.log("successfully deleted the List_Column");
      }
    }
  );
});

module.exports = router;
