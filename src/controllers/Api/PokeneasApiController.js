const { Pokeneas } = require("../../models/Pokeneas");

const index = (req, res) => {
  const number = Math.floor(Math.random() * Pokeneas.length);
  const pokenea = Pokeneas[number];

  const { id, name, height, skills } = pokenea;

  res.send({
    id,
    name,
    height,
    skills,
  });
};

module.exports = {
  index,
};
