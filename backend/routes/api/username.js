const express = require("express");
const db_con = require("../../db");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    db_con.query(" select username, user_id from User", (error, result) => {
      if (error) res.send(error);
      if (result) res.send(result);
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
