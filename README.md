# Postal Abbreviations

A no-fuss US postal abbreviations module, for converting an abbreviation to a state name or vice versa.

Matching is case-insensitive and does some fuzzy matching for names that might be abbreviated like `N. Dakota`.

```js
var postal = require("postal-abbreviations");

console.log(postal("North Dakota")); // returns "ND"
console.log(postal("N Dakota")); // returns "ND"
console.log(postal("ND")); // returns "North Dakota"
```

## Installation

Install via [npm](https://www.npmjs.com/):

```
npm install postal-abbreviations
```

## Usage

Require the module:

```js
var postal = require("postal-abbreviations");
```

Then call the function:

```js
postal("OR"); //Oregon
postal("Puerto Rico"); //PR
postal("UT"); //Utah
postal("District of Columbia"); //DC
postal("Washington, D.C."); //DC
postal("Narnia"); //null
```

### postal([state name or postal abbreviation])

If you pass a state name (`postal("California")`), it will return the two-letter postal abbreviation (`"CA"`).  If you pass a two-letter postal abbreviation (`postal("NV")`), it will return the state name, with proper capitalization (`"Nevada"`).

If no match is found, it will return `null`.

### Notes

Includes every state and US possession on [this US Postal Service list](http://pe.usps.gov/text/pub28/28apb.htm).