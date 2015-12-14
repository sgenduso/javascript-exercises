var yourCode = require('../src');

describe("helloWorld", function() {

  it("returns the string Hello World", function() {
    expect(yourCode.helloWorld()).toEqual("Hello World");
  });

});

describe("hello", function() {

  it("returns Hello plus the string you pass it", function() {
    expect(yourCode.hello('Frog')).toEqual("Hello Frog");
  });

});

describe("shout", function() {

  it("returns Hello plus the string you pass it, upper case", function() {
    expect(yourCode.shout('Frog')).toEqual("Hello FROG");
  });

  it("returns Hello plus the string you pass it, upper case", function() {
    expect(yourCode.shout('Fox')).toEqual("Hello FOX");
  });

});

describe("whisper", function() {

  xit("returns Hello plus the string you pass it, lower case", function() {
    expect(yourCode.whisper('Frog')).toEqual("Hello frog");
  });

  xit("returns Hello plus the string you pass it, lower case", function() {
    expect(yourCode.whisper('FoX')).toEqual("Hello fox");
  });

});

describe("separate", function() {

  xit("returns the characters of the given word as an array", function() {
    expect(yourCode.separate('jumbo')).toEqual(['j', 'u', 'm', 'b', 'o']);
  });

  xit("returns the characters of the given word as an array", function() {
    expect(yourCode.separate('foobar')).toEqual(['f', 'o', 'o', 'b', 'a', 'r']);
  });

});

describe("reverseJoin", function() {

  xit("returns the characters of the given array, reversed and joined", function() {
    expect(yourCode.reverseJoin(['j', 'u', 'm', 'b', 'o'])).toEqual('o,b,m,u,j');
  });

  xit("returns the characters of the given array, reversed and joined", function() {
    expect(yourCode.reverseJoin(['f', 'o', 'o', 'b', 'a', 'r'])).toEqual('r,a,b,o,o,f');
  });

});

describe("reverseJoinCompact", function() {

  xit("returns the characters of the given array, reversed and joined by nothing", function() {
    expect(yourCode.reverseJoinCompact(['j', 'u', 'm', 'b', 'o'])).toEqual('obmuj');
  });

  xit("returns the characters of the given array, reversed and joined by nothing", function() {
    expect(yourCode.reverseJoinCompact(['f', 'o', 'o', 'b', 'a', 'r'])).toEqual('raboof');
  });

});

describe("backwardsDay", function() {

  xit("returns Hello plus the string you pass it, reversed", function() {
    expect(yourCode.backwardsDay('Frog')).toEqual("Hello gorF");
  });

  xit("returns Hello plus the string you pass it, reversed", function() {
    expect(yourCode.backwardsDay('FraggleRock')).toEqual("Hello kcoRelggarF");
  });

});
