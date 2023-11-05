const express = require("express");
const PokeneasController = require("../controllers/PokeneasController");

class WebRoutes {
  static init() {
    const router = express.Router();
    router.get("/", PokeneasController.index);
    return router;
  }

  static pokeneas() {
    const router = express.Router();
    router.get("/show", PokeneasController.show_card);
    return router;
  }
}

module.exports = WebRoutes;
