const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
  const cards_data = {
    card_id: req.body.card_id, //pk
    list_id: req.body.list_id, //fk
    descriptions: req.body.descriptions,
    created_on: req.body.created_on,
  };
  res.send(cards_data);
});

router.post("/delete", (req, res) => {
  res.send("api is working");
});

module.exports = router;
