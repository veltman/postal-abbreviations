var toName = require("./postal-to-name.json"),
    toPostal = require("./name-to-postal.json"),
    fuzzyMatches = require("./fuzzy-matches.js");

var convert = function(input) {

  if (!isStr(input)) {
    return null;
  }

  var cleaned = clean(input);

  if (cleaned.length === 2) {
    return convertToName(cleaned);
  }

  return convertToAbbreviation(cleaned);

};

convert.toName = function(input) {

  return convertToName(clean(input));

};

convert.toAbbreviation = function(input) {

  return convertToAbbreviation(clean(input));

}

function convertToName(input) {
  return toName[input] || null;
}

function convertToAbbreviation(input) {

  if (toPostal[input]) {
    return toPostal[input];
  }

  for (var i = 0, l = fuzzyMatches.length; i < l; i++) {
    if (input.match(fuzzyMatches[i][0])) {
      return fuzzyMatches[i][1];
    }
  }

  return null;

}

function isStr(str) {
  return typeof str === "string";
}

function clean(str) {
  return str.trim().replace(/\s+/g," ").toUpperCase();
}

module.exports = convert;
