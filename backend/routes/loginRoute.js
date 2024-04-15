const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db_con = require("../db");
const secret = "mysecret";
var jwt = require("jsonwebtoken");
router.post("/", (req, res) => {
  const { email } = req.body;
  const textPassword = req.body.password;
  try {
    db_con.query(
      `SELECT * FROM User WHERE email = "${email}"`,
      (error, results) => {
        if (error) console.log(error);
        const { user_id, password } = results[0];
        bcrypt.compare(textPassword, password).then((result) => {
          if (result !== false) {
            const user = {
              id: user_id,
            };
            const jwtAuthToken = jwt.sign(user, secret);
            console.log(jwtAuthToken);
            res.status(201).json({
              success: true,
              authToken: jwtAuthToken,
              message: "Login Successfull",
            });
          } else {
            res
              .status(400)
              .json({ success: false, message: "user does not exist" });
          }
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
// db_con.query(
//   `SELECT * FROM User WHERE email = "${email}" and password = "${password}"`,
//   (err, result) => {
//     if (err) console.log(err);
//     if (result) {
//       if (result.length !== 0) {
//         console.log("successfull");
//         res.status(200).json({ message: "successfully" });
//       } else {
//         console.log("not successfull");
//         res.status(301).json({ message: "invalid credentials" });
//       }
//     }
//   }
// );
