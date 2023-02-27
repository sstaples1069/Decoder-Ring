// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function toUnicode(array) {
    return array.map((character) => {
      const unicode = character.toLowerCase().charCodeAt();
      return unicode >= 97 && unicode <= 122 ? unicode : character;
    });
  }

  function caesar(input, shift, encode = true) {
    // Checks for given shift constraint
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }
    // decode mode - invert the shift
    if (encode === false) {
      shift = shift * -1;
    }

    let message = input.split("");
    let inputNumbers = toUnicode(message);

    // applies shift only to valid characters, which excludes spaces
    let shiftedNumbers = inputNumbers.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });

    // loop correction handles case where the shift goes left of "a" or right of "z"
    let loopCorrectedNumbers = shiftedNumbers.map((number) => {
      if (typeof number === "number") {
        if (number < 97) {
          return number + 26;
        }
        if (number > 122) {
          return number - 26;
        }
      }
      return number;
    });

    //converts unicode back into a string for the resulting output
    let finalMsg = loopCorrectedNumbers.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return finalMsg.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
