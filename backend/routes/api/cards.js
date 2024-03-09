const express = require("express");
const router = express.Router();
const cardJSON = require("./cards.json");

router.post("/create", (req, res) => {
  const cards_data = {
    card_id: req.body.card_id, //pk
    list_id: req.body.list_id, //fk
    task_name: req.body.title,
    descriptions: req.body.description,
    department: req.body.department_type,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    priority: req.body.priority,
  };
  res.send(cards_data);
  console.log(cards_data);
});

router.get("/", (req, res) => {
  res.send(cardJSON);
});

router.post("/delete", (req, res) => {
  res.send("api is working");
});

module.exports = router;
