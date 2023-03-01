// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

//functionality tests:
describe("encoding a message", () => {
  it("encodes messages by replacing letters with a positive shift in the standard alphabet", () => {
    const message = "phantom";
    const shift = 5;
    const actual = caesar(message, shift);
    const expected = "umfsytr";
    expect(actual).to.equal(expected);
  });

  it("encodes messages by replacing letters with a negative shift in the standard alphabet", () => {
    const message = "phantom";
    const shift = -5;
    const actual = caesar(message, shift);
    const expected = "kcviojh";
    expect(actual).to.equal(expected);
  });

  //"Spaces should be maintained throughout,
  //as should other nonalphabetic symbols."
  it("should leaves spaces and other symbols as is", () => {
    const message = "i am iron man.";
    const shift = 5;
    const actual = caesar(message, shift);
    const expected = "n fr nwts rfs.";
    expect(actual).to.equal(expected);
  });

  //"Capital letters can be ignored."
  it("should ignore capital letters", () => {
    const message = "I Am Iron Man";
    const shift = 5;
    const actual = caesar(message, shift);
    const expected = "n fr nwts rfs";
    expect(actual).to.equal(expected);
  });

  //"If a letter is shifted so that it goes "off" the alphabet
  //(e.g., a shift of 3 on the letter z),
  //it should wrap around to the front of the alphabet
  //(e.g., z becomes c)."
  it("should wrap around the alphabet for letters at the end of the alphabet", () => {
    const message = "phantom stryker";
    const shift = 5;
    const actual = caesar(message, shift);
    const expected = "umfsytr xywdpjw";
    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("decodes messages by shifting the letters in the opposite direction", () => {
    const message = "umfsytr";
    const shift = 5;
    const actual = caesar(message, shift);
    const expected = "phantom";
    expect(actual).to.equal(expected);
  });

  it("decodes messages with a negative shift value", () => {
    const message = "kcviojh";
    const shift = -5;
    const actual = caesar(message, shift);
    const expected = "phantom";
    expect(actual).to.equal(expected);
  });

  //"Spaces should be maintained throughout,
  //as should other nonalphabetic symbols."
  it("should leaves spaces and other symbols as is", () => {
    const message = "n fr nwts rfs.";
    const shift = 5;
    const actual = caesar(message, shift);
    const expected = "i am iron man.";
    expect(actual).to.equal(expected);
  });

  //"Capital letters can be ignored."
  it("should ignore capital letters", () => {
    const message = "N Fr NWts RFS";
    const shift = 5;
    const actual = caesar(message, shift);
    const expected = "i am iron man";
    expect(actual).to.equal(expected);
  });

  //"If a letter is shifted so that it goes "off" the alphabet
  //(e.g., a shift of 3 on the letter z),
  //it should wrap around to the front of the alphabet
  //(e.g., z becomes c)."
  it("should wrap around the alphabet for letters at the end of the alphabet", () => {
    const message = "umfsytr xywdpjw";
    const shift = 5;
    const actual = caesar(message, shift);
    const expected = "phantom stryker";
    expect(actual).to.equal(expected);
  });

  //tests for outside cases:
  //"If the shift value isn't present,
  //equal to 0, less than -25, or greater than 25,
  //the function should return false."
  describe("catching errors", () => {
    it("returns false if there is no input for the shift", () => {
      const message = "i am iron man";
      const shift = null;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });

    it("returns false if the input for shift is 0", () => {
      const message = "i am iron man";
      const shift = 0;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });

    it("returns false if the shift is a value less than -25", () => {
      const message = "i am iron man";
      const shift = -26;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });

    it("returns false if the shift value is greater than 25", () => {
      const message = "i am iron man";
      const shift = 26;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
  });
});
