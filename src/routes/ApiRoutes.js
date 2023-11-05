const express = require("express");
const PokeneasApiController = require("../controllers/Api/PokeneasApiController");

class ApiRoutes {
  static init() {
    const router = express.Router();
    router.get("/", PokeneasApiController.index);
    return router;
  }
}

module.exports = ApiRoutes;
