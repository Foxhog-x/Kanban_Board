const express = require("express");
const db_con = require("../../db");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});
