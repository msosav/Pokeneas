const { Pokeneas } = require("../models/Pokeneas");
const os = require("os");

class PokeneasController {
  static index = (req, res) => {
    res.render("pokeneas/home");
  };

  static show_card = (req, res) => {
    const number = Math.floor(Math.random() * Pokeneas.length);
    const pokenea = Pokeneas[number];

    const { name, image, quote } = pokenea;

    res.render("pokeneas/show_card", {
      name,
      image,
      quote,
      docker_container: os.hostname(),
    });
  };
}

module.exports = PokeneasController;
