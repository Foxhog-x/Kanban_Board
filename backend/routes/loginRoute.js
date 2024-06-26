const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db_con = require("../db");
const secret = "mysecret";

const jwt = require("jsonwebtoken");
router.post("/", (req, res) => {
  let email = req.body.email;
  const textPass = req.body.password;
  console.log(email);

  try {
    db_con.query(
      `select * from user where email = '${email}'`,
      (error, results) => {
        if (error) console.log(error);
        if (results) {
          let password = results[0]?.password;
          let user_id = results[0]?.user_id;

          // Hash a password

          bcrypt.compare(textPass, password).then((error, result) => {
            if (error) console.log(error);
            if (result !== false) {
              const user = {
                id: user_id,
              };
              const jwtAuthToken = jwt.sign(user, secret);
              res.status(201).json({
                success: true,
                user_id: user_id,
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
