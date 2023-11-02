const express = require("express");
const PokeneasController = require("../controllers/PokeneasController");

class WebRoutes {
  static initialize() {
    const router = express.Router();
    router.get("/", PokeneasController.index);
    return router;
  }
}

module.exports = WebRoutes;
