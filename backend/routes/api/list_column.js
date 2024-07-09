const express = require("express");
const router = express.Router();
const list_controller = require('../../controllers/list_controller')

router.post("/", list_controller.getListCol);

router.post("/create", list_controller.createListCol);

router.post("/delete", list_controller.deleteListCol);

module.exports = router;
