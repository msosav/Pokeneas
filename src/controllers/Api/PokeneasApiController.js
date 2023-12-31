const { Pokeneas } = require("../../models/Pokeneas");
const os = require("os");

class PokeneasApiController {
  static index = (req, res) => {
    const number = Math.floor(Math.random() * Pokeneas.length);
    const pokenea = Pokeneas[number];

    const { id, name, height, skills } = pokenea;

    res.render("pokeneas/show_json", {
      id,
      name,
      height,
      skills,
      docker_container: os.hostname(),
    });
  };

  static raw = (req, res) => {
    const number = Math.floor(Math.random() * Pokeneas.length);
    const pokenea = Pokeneas[number];

    const { id, name, height, skills } = pokenea;

    res.json({
      id,
      name,
      height,
      skills,
      docker_container: os.hostname(),
    });
  };
}

module.exports = PokeneasApiController;
