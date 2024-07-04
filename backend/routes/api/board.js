const express = require("express");
const user_idMiddlewere = require("../../user_idMiddlewere");
const router = express.Router();
const boardController = require('../../controllers/boardController')

router.post("/", boardController.getAllBoard);

router.post("/create", user_idMiddlewere, boardController.createBoard);

router.post("/delete", boardController.deleteBoard);



module.exports = router;
