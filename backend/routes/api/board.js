const express = require("express");
const user_idMiddlewere = require('../../user_idMiddlewere');
const router = express.Router();
const boardcontroller = require('../../controllers/boardcontroller');

router.post("/", boardcontroller.getAllBoard);

router.post("/create", user_idMiddlewere, boardcontroller.createBoard);

router.post("/delete", boardcontroller.deleteBoard);

module.exports = router;
