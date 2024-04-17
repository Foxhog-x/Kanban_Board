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
  console.log(req.body);
  console.log(req.user_id);
});
module.exports = router;
