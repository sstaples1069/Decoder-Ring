// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

//functionality tests:
describe("encoding a message", () => {
  it("encodes a message by using the input substitution alphabet", () => {
    const message = "phantom";
    const alphabet = "azbycxdwevfugthsirjqkplomn";
    const actual = substitution(message, alphabet);
    const expected = "swatqhg";
    expect(actual).to.equal(expected);
  });

  //"The input could include spaces and letters
  //as well as special characters such as #, $, *, etc."
  it("works with any kind of key with unique characters", () => {
    const message = "phantom";
    const alphabet = " zbycxd#evfugthsirjqkplomn";
    const actual = substitution(message, alphabet);
    const expected = "s# tqhg";
    expect(actual).to.equal(expected);
  });

  //"Spaces should be maintained throughout."
  it("maintains spaces", () => {
    const message = "phantom stryker";
    const alphabet = "azbycxdwevfugthsirjqkplomn";
    const actual = substitution(message, alphabet);
    const expected = "swatqhg jqrmfcr";
    expect(actual).to.equal(expected);
  });

  //"Capital letters can be ignored."
  it("ignores capital letters", () => {
    const message = "Phantom STRYKER";
    const alphabet = "azbycxdwevfugthsirjqkplomn";
    const actual = substitution(message, alphabet);
    const expected = "swatqhg jqrmfcr";
    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("decodes a message by using the given substitution alphabet", () => {
    const message = "hepfzgd";
    const alphabet = "poiuytrewqasdfghjklzxcvbnm";
    const actual = substitution(message, alphabet, false);
    const expected = "phantom";
    expect(actual).to.equal(expected);
  });

  //"The input could include spaces and letters
  //as well as special characters such as #, $, *, etc."
  it("works with any kind of key with unique characters", () => {
    const message = "h$ fzgd";
    const alphabet = " oiuytr$wqasdfghjklzxcvbnm";
    const actual = substitution(message, alphabet, false);
    const expected = "phantom";
    expect(actual).to.equal(expected);
  });

  //"Spaces should be maintained throughout."
  it("maintains spaces", () => {
    const message = "hepfzgd lzknayk";
    const alphabet = "poiuytrewqasdfghjklzxcvbnm";
    const actual = substitution(message, alphabet, false);
    const expected = "phantom stryker";
    expect(actual).to.equal(expected);
  });

  //"Capital letters can be ignored."
  it("ignores capital letters", () => {
    const message = "Hepfzgd LZKNAYK";
    const alphabet = "poiuytrewqasdfghjklzxcvbnm";
    const actual = substitution(message, alphabet, false);
    const expected = "phantom stryker";
    expect(actual).to.equal(expected);
  });
});

//tests for outside cases:
describe("catching errors", () => {
  it("returns false if no substitution alphabet is given", () => {
    const message = "phantom";
    const actual = substitution(message);
    expect(actual).to.be.false;
  });

  //"The alphabet parameter must be a string of exactly 26 characters"
  it("returns false if the substitution alphabet is not exactly 26 characters", () => {
    const message = "phantom";
    const alphabet = "poiuytrewqasdfghjklzxcvbn";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });

  //"All the characters in the alphabet parameter must be unique. 
  //Otherwise, it should return false."
  it("returns false if the substitution alphabet does not contain unique characters", () => {
    const message = "phantom";
    const alphabet = "notalluniquelettersinthis.";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });
});
