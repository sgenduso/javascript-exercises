/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    var string = '';
    list.forEach(function (thing) {
      string += thing;
    });
    return string;
    // your code here

  },
  joinWithForAndIndex: function(list) {
    var string = '';
    list.forEach(function (thing, i) {
      string += thing + i;
    });
    return string;
  },

  joinWithoutOddCharacters: function(list) {
    var string = '';
    list.forEach(function (thing, i) {
      if (i % 2 === 0) {
        string += thing;
      }
    });
    return string;
  },

  joinWithForAndToken: function(list) {
    // your code here
  },

  joinWithForAndAlternatingTokens: function(list) {
    // your code here
  }

}
