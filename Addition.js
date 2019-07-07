var Tutorial = require("./Tutorial1.js");
var exports = (module.exports = {});

exports.AddNumber = function(a, b) {
  return a + b;
};

exports.NodeTutorial = function() {
  console.log("Guru99 Tutorial");
  this.pTutor = function() {
    Tutorial.Tutorial();
  };
  Tutorial.Tutorial();
};
