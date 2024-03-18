const express = require("express");
const db_con = require("../../db");
const router = express.Router();
const fs = require("fs");
const path = require("path");

let pathname = path.join(__dirname, "user.json");
router.get("/", (req, res) => {
  try {
    db_con.query(" select username, user_id from User", (error, result) => {
      if (error) console.log(error);
      let jsonObj = JSON.stringify(result);
      fs.writeFile(pathname, jsonObj, "utf8", (err, data) => {
        if (err) res.send(err);
        res.send(data);
      });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
