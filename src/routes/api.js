const express = require("express");
const PokeneasApiController = require("../controllers/Api/PokeneasApiController");
const router = express.Router();

router.get("/", PokeneasApiController.index);

module.exports = router;
