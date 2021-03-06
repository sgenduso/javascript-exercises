/*
  In these warm-ups, all of the code is provided, as are the failing tests. Locate
  the defect in each function and make all of the tests green. Note: when you change
  some tests from pending -> active, they may pass initially (keep going!).
*/

module.exports = {
  addition: function(a,b) {
    return a + b;
  },

  matches: function(first, second) {
    var result;

    if (first == second) {
      result = true;
    } else {
      result = false;
    }

    return result;
  },

  fizzBuzz: function(number) {
    var divisibleByThree = (number % 3 === 0),
        divisibleByFive = (number % 5 === 0),
        output = number;

    if (divisibleByThree && divisibleByFive) {
      output = 'FizzBuzz';
    } else if (divisibleByThree) {
      output = 'Fizz';
    } else if (divisibleByFive) {
      output = 'Buzz';
    }

    return output;
  },

  switcher: function(word) {
    var output;

    switch (word) {
      case 'foo':
        output = 'bar';
        break;
      case 'nope':
        output = 'yup';
        break;
      default:
        output = 'never output anything. ever!';
    }

    return output;
  }

};
