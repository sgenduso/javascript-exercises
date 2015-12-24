module.exports = {

  joinWithFor: function(list) {
    var string = '';
    list.forEach(function (thing) {
      string += thing;
    });
    return string;
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

  joinWithForAndToken: function(list, token) {
    var string = '';
    list.forEach(function (thing) {
      string += thing;
    });
    return string.split('').join(token);
  },

  joinWithForAndAlternatingTokens: function(list, token1, token2) {
    var string = '';
    list.forEach(function (thing, i) {
      token = (i % 2 === 0) ? token1 : token2;
      string += thing + token;
    });
    return string.slice(0, -1);
  }

};
