/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    var string = '';
    list.forEach(function (thing) {
      sting += thing;
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
    // your code here
  },

  joinWithForAndToken: function(list) {
    // your code here
  },

  joinWithForAndAlternatingTokens: function(list) {
    // your code here
  }

}
