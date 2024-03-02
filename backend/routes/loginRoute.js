const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const site_user_Logindata = {
    user_id: req.body.user_id, //pk
    name_: req.body.name_,
    email: req.body.email,
    password: req.body.password,
    created_on: req.body.created_on,
  };
  res.send(site_user_Logindata);
});

module.exports = router;
