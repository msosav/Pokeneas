const express = require("express");
const PokeneasApiController = require("../controllers/Api/PokeneasApiController");
const router = express.Router();

class ApiRoutes {
  static init() {
    router.get("/", PokeneasApiController.index);
    return router;
  }
}

module.exports = ApiRoutes;
