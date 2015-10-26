var assert = require("assert"),
    postal = require("./index.js");

assert.equal(postal(),null,"postal() should return null");
assert.equal(postal(50),null,"postal(50) should return null");
assert.equal(postal({is: "not a string"}),null,"postal({}) should return null");
assert.equal(postal(["a",["nope"]]),null,"postal([[]]) should return null");

assert.equal(postal("CA"),"California","CA -> California");
assert.equal(postal("ca"),"California","ca -> California");
assert.equal(postal(" ca "),"California","ca -> California");



assert.equal(postal("South Dakota"),"SD","South Dakota -> SD");
assert.equal(postal("S. Dakota"),"SD","S. Dakota -> SD");
assert.equal(postal("S Dakota"),"SD","S Dakota -> SD");
assert.equal(postal("S  Dakota"),"SD","S  Dakota -> SD");

assert.equal(postal("Washington, DC"),"DC","Washington, DC -> DC");
assert.equal(postal("Washington,DC"),"DC","Washington, DC -> DC");
assert.equal(postal("Washington, D.C."),"DC","Washington, D.C. -> DC");
assert.equal(postal("Washington DC"),"DC","Washington DC -> DC");
assert.equal(postal("Washington D.C."),"DC","Washington D.C. -> DC");
assert.equal(postal(" district of columbia"),"DC","district of columbia -> DC");

assert.equal(postal("micronesia"),"FM","micronesia -> FM");
assert.equal(postal("Micronesia"),"FM","Micronesia -> FM");
assert.equal(postal("Federated States Of Micronesia"),"FM","Federated States Of Micronesia -> FM");
assert.equal(postal("The Federated States Of Micronesia"),"FM","The Federated States Of Micronesia -> FM");

assert.equal(postal("The Marshall Islands"),"MH","The Marshall Islands -> MH");
assert.equal(postal("Marshall Islands"),"MH","Marshall Islands -> MH");

assert.equal(postal("Virgin Islands"),"VI","Virgin Islands -> VI");
assert.equal(postal("US Virgin Islands"),"VI","US Virgin Islands -> VI");
assert.equal(postal("U.S. Virgin Islands"),"VI","U.S. Virgin Islands -> VI");
assert.equal(postal("U.S Virgin Islands"),"VI","U.S Virgin Islands -> VI");
assert.equal(postal("The US Virgin Islands"),"VI","The US Virgin Islands -> VI");
assert.equal(postal("The U.S. Virgin Islands"),"VI","The U.S. Virgin Islands -> VI");
assert.equal(postal("The Virgin Islands"),"VI","The Virgin Islands -> VI");
assert.equal(postal("The French Virgin Islands"),null,"The French Virgin Islands -> null");

assert.equal(postal("N Jersey"),"NJ","N Jersey -> NJ");
assert.equal(postal("New Jersey"),"NJ","New Jersey -> NJ");
assert.equal(postal("N. Jersey"),"NJ","N. Jersey -> NJ");

assert.equal(postal("N Carolina"),"NC","N Carolina -> NC");
assert.equal(postal("N. Carolina"),"NC","N. Carolina -> NC");
assert.equal(postal("North Carolina"),"NC","North Carolina -> NC");

assert.equal(postal("S Dakota"),"SD","S Dakota -> SD");
assert.equal(postal("S. Dakota"),"SD","S. Dakota -> SD");
assert.equal(postal("South Dakota"),"SD","South Dakota -> SD");

assert.equal(postal.toAbbreviation("S Dakota"),"SD","abbreviation(S Dakota) -> SD");
assert.equal(postal.toAbbreviation("South Dakota"),"SD","abbreviation(South Dakota) -> SD");
assert.equal(postal.toName("S Dakota"),null,"name(S Dakota) -> null");
assert.equal(postal.toName("SD"),"South Dakota","name(SD) -> South Dakota");
assert.equal(postal.toAbbreviation("SD"),null,"abbreviation(SD) -> null");

//assert.deepEqual(postal(["NV","UT","CO"]),["Nevada","Utah","Colorado"],"[NV,UT,CO] failed");
//assert.deepEqual(postal(["S. DAKOTA","north carolina","France"]),["SD","NC",null],"[S. DAKOTA,north carolina,France] failed");
