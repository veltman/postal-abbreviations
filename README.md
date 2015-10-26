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

It will automatically detect which way you're converting, but you can force it with `.toName()` or `.toAbbreviation()`:

```js
postal.toName("OR"); //Oregon
postal.toAbbreviation("OR"); //null, OR isn't a state name

postal.toAbbreviation("Washington"); //WA
postal.toName("Washington"); //null, Washington isn't an abbreviation
```

### postal([state name or postal abbreviation])

If you pass a state name (`postal("California")`), it will return the two-letter postal abbreviation (`"CA"`).  If you pass a two-letter postal abbreviation (`postal("NV")`), it will return the state name, with proper capitalization (`"Nevada"`).

If no match is found, it will return `null`.

### postal.toAbbreviation([state name])

Returns the postal abbreviation that matches the state name.

If no match is found, it will return `null`.

### postal.toName([postal abbreviation])

Returns the state name that matches the two-letter postal abbreviation.

If no match is found, it will return `null`.

### Notes

Includes every state and US possession on [this US Postal Service list](http://pe.usps.gov/text/pub28/28apb.htm).
