// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // substitution alphabet must be provided and be exactly 26 characters long.
    if (!alphabet || alphabet.length !== 26) return false;

    //Global Variables
    const theAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const message = input.toLowerCase().split("");
    const substitutionAlphabet = alphabet.toLowerCase().split("");

    // all chars in substitution alphabet must be unique
    const onlyUniqueChars = substitutionAlphabet.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (onlyUniqueChars.length !== alphabet.length) return false;

    const encodeMsg = () => {
      let result = [];
      const encode = (char) => {
        const charIndex = theAlphabet.indexOf(char);
        const encodedChar = substitutionAlphabet[charIndex];
        result.push(encodedChar);
      };
      message.forEach((char) => {
        // preserves space or encodes character
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };

    const decodeMsg = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = substitutionAlphabet.indexOf(char);
        const decodedChar = theAlphabet[charIndex];
        result.push(decodedChar);
      };
      message.forEach((char) => {
        // preserves space or decodes character
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };

    // encode or decode.
    return encode ? encodeMsg() : decodeMsg();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
