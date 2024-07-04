const secret = "mysecret";
var jwt = require("jsonwebtoken");
const user_idMiddlewere = (req, res, next) => {
  let token = req.body.creator_id;

  if (token === null) res.sendStatus(401);
  jwt.verify(token, secret, (Error, success) => {
    if (Error) {
      console.log(Error);
      res.sendStatus(403);
    }
    if (success) {
      req.user_id = success;
      next();
    }
  });
};
module.exports = user_idMiddlewere;
