const { Pokeneas } = require("../models/Pokeneas");
const os = require("os");

const show_card = (req, res) => {

  const number = Math.floor(Math.random() * Pokeneas.length);
  const pokenea = Pokeneas[number];

  const { name, image, quote } = pokenea;

  res.render('pokeneas/show_card', {
    name,
    image,
    quote,
    "docker_container": os.hostname(),
  });
  

};

const index = (req, res) => {
    res.render('pokeneas/home');
};

module.exports = {
  index,
  show_card,
};
