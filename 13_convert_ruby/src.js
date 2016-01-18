/*
  In each of these examples some Ruby code is provided inline. Your job is to translate
  the Ruby code into JavaScript. Individual line comments (//) indicate where code should
  be placed.
*/

module.exports = {
  /*
    def return_array
      [1,2,3,4]
    end
  */

  returnArray: function() {
    return [1,2,3,4];
  },

  /*
    def divide(numerator, denominator)
      numerator / denominator
    end
  */

  divide: function (num, den) {
    return num / den;
  },

  /*
    def add(a,b)
      a + b
    end
  */

  add: function (a, b) {
    return a + b;
  },

  /*
    def power(base, exponent)
      base ** exponent
    end
  */

  power: function (base, exp) {
    return Math.pow(base, exp);
  }

  /*
    def concatenate(string_1, string_2)
      string_1 + string_2
    end
  */

  // your code here for concatenate

  /*
    def sub(string, char, replacement)
      string.sub(char, replacement)
    end
  */

  // your code here for sub
}
