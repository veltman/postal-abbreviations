var toName = require("./postal-to-name.json"),
    toPostal = require("./name-to-postal.json"),
    fuzzyMatches = require("./fuzzy-matches.js");

function convert(input) {

  if (Array.isArray(input) && input.every(isStr)) {
    return input.map(doConversion);
  }

  return doConversion(input);

}

function doConversion(str) {

  if (!isStr(str)) {
    return null;
  }

  var test = str.trim().replace(/\s+/g," ").toUpperCase();

  if (test.length === 2) {
    return toName[test] || null;
  }

  if (toPostal[test]) {
    return toPostal[test];
  }

  for (var i = 0, l = fuzzyMatches.length; i < l; i++) {
    if (test.match(fuzzyMatches[i][0])) {
      return fuzzyMatches[i][1];
    }
  }

  return null;

}

function isStr(str) {
  return typeof str === "string";
}
module.exports = convert;