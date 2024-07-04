const express = require("express");
const router = express.Router();
const list_Controller = require('../../controllers/list_controller')

router.post("/", list_Controller.getListCol);

router.post("/create", list_Controller.createListCol);

router.post("/delete", list_Controller.deleteListCol);

module.exports = router;
