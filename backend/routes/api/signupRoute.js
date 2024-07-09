const express = require("express");
const router = express.Router();
const db_con = require("../../db");
const bcrypt = require("bcrypt");
const path = require("path");

// const pathname = path.join(__dirname, "/usersdata/user.json");
// const userData = require("./usersdata/user.json");
// const { error } = require("console");

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const username = firstName + "_" + lastName;
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const secretPassword = await bcrypt.hash(password, salt);
    console.log(username);
    const query =
      "INSERT INTO user (username, password, email, first_name, last_name) VALUES (?, ?, ?, ?, ?)";
    db_con.query(
      query,
      [username, secretPassword, email, firstName, lastName],
      (error, results) => {
        if (error) res.status(500).json({ success: false, message: error });
        res.status(201).json({ success: true, message: "succesfully Created" });
      }
    );
  } catch (error) {
    console.error("Error during signup process:", error);
    res.status(500).send("Internal server error.");
  }
});

module.exports = router;
