const express = require("express");
const router = express.Router();
const cardController = require("../../controllers/cardcontroller");

router.post("/", cardController.getAllCards);
router.put("/update", cardController.updateCard)
router.post("/create", cardController.createCard);
router.post("/delete", cardController.deleteSingleCard);



module.exports = router;
