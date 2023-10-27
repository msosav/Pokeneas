const express = require("express");
const PokeneasApi = require("../controllers/Api/PokeneasApiController");
const router = express.Router();

router.get("/", PokeneasApi.index);

module.exports = router;
