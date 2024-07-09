const express = require("express");
const router = express.Router();
const cardcontroller = require("../../controllers/cardcontroller");

router.post("/", cardcontroller.getAllCards);
router.put("/update", cardcontroller.updateCard)
router.post("/create", cardcontroller.createCard);
router.post("/delete", cardcontroller.deleteSingleCard);



module.exports = router;
