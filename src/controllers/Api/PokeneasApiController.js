const { Pokeneas } = require("../../models/Pokeneas");
const os = require("os");

class PokeneasApiController {
  index(req, res) {
    const number = Math.floor(Math.random() * Pokeneas.length);
    const pokenea = Pokeneas[number];

    const { id, name, height, skills } = pokenea;

    res.send({
      id,
      name,
      height,
      skills,
      "docker-container": os.hostname(),
    });
  }
}

module.exports = PokeneasApiController;
