const express = require("express");
const PokeneasApiController = require("../controllers/Api/PokeneasApiController");

class ApiRoutes {
  static initialize() {
    const router = express.Router();
    router.get("/pokeneas", PokeneasApiController.index);
    return router;
  }
}

module.exports = ApiRoutes;
