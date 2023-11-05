const express = require("express");
const PokeneasController = require("../controllers/PokeneasController");

class WebRoutes {
  static init() {
    router.get("/", PokeneasController.index);
    router.get("/show", PokeneasController.show_card);
    return router;
  }
}

module.exports = WebRoutes;
