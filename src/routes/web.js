const express = require("express");
const PokeneasController = require("../controllers/PokeneasController");
const PokeneasApiController = require("../controllers/Api/PokeneasApiController");
const router = express.Router();

router.get("/", PokeneasController.index);
router.get("/show_pokecard", PokeneasController.show_card);
router.get("/show_pokejson", PokeneasApiController.index);

module.exports = router;
