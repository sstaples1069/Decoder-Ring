// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("encoding a message", () => {
  it("encodes a message by translating each letter to number pairs", () => {
    const message = "phantom";
    const actual = polybius(message);
    const expected = "53321133444323";
    expect(actual).to.equal(expected);
  });

  //Spaces should be maintained throughout.
  it("maintains spaces", () => {
    const message = "phantom stryker";
    const actual = polybius(message);
    const expected = "53321133444323 34442445525124";
    expect(actual).to.equal(expected);
  });

  //"Capital letters can be ignored"
  it("ignores capital letters", () => {
    const message = "Phantom STRYKER";
    const actual = polybius(message);
    const expected = "53321133444323 34442445525124";
    expect(actual).to.equal(expected);
  });

  //"The letters I and J share a space. 
  //When encoding, both letters can be converted to 42"
  it("translates both 'i' and 'j' to 42", () => {
    const message = "justice";
    const actual = polybius(message);
    const expected = "42543444423151";
    expect(actual).to.equal(expected);
  });

});

describe("decoding a message", () => {
  it("decodes messages by translating each pair of numbers into a letter", () => {
    const message = "53321133444323";
    const actual = polybius(message, false);
    const expected = "phantom";
    expect(actual).to.equal(expected);
  });

  //"When decoding, the number of characters 
  //in the string excluding spaces should be even."
  it("returns false if the length of all numbers is odd", () => {
    const message = "53321133444323 3444244552512";
    const actual = polybius(message, false);
    expect(actual).to.be.false;
  });
  
  it("maintains spaces", () => {
    const message = "53321133444323 34442445525124";
    const actual = polybius(message, false);
    const expected = "phantom stryker";
    expect(actual).to.equal(expected);
  });

  //"...when decoding, both letters (i/j) should somehow be shown."
  it("translates 42 to both 'i' and 'j'", () => {
    const message = "42543444";
    const actual = polybius(message, false);
    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });

});
