const express = require("express");
const router = express.Router();

router.post("/todo", (req, res) => {
  const list_type_tododata = {
    list_type_id: req.body.list_type_id, //pk
    board_id: req.body.board_id, //fk
  };
  res.send(list_type_tododata);
});

module.exports = router;
