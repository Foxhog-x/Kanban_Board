const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
  const boards_data = {
    board_id: req.body.board_id, //pk
    board_name: req.body.board_name,
    is_public: req.body.is_public,
    user_id: req.body.user_id, //Fk
    created_on: req.body.created_on,
  };
  res.send(boards_data);
});

module.exports = router;
