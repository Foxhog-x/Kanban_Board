const express = require("express");
const router = express.Router();
const cardJSON = [
  {
    card_id: 1,
    list_id: 1,
    task_name: "Crate an api",
    description: "using node.js create some routes for handling data",
    create_date: "3/3/2024",
  },
];
router.post("/create", (req, res) => {
  const cards_data = {
    card_id: req.body.card_id, //pk
    list_id: req.body.list_id, //fk
    descriptions: req.body.descriptions,
    created_on: req.body.created_on,
  };
  res.send(cards_data);
});

router.get("/", (req, res) => {
  res.send(cardJSON);
});
router.post("/delete", (req, res) => {
  res.send("api is working");
});

module.exports = router;
