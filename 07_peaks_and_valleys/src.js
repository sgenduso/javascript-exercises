/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  peak: function() {
    return '/\\';
  },

  valley: function () {
    return '___';
  },

  peaks: function (num) {
    var peak = '/\\';
    var string = '';
    for (var i = 0; i < num; i++) {
      string += peak;
    }
    return string;
  },

  valleys: function (num) {
    var valley = '___';
    var string = '';
    for (var i = 0; i < num; i++) {
      string += valley;
    }
    return string;
  },

  peaksAndValleys: function (numPeaks, numValleys) {
    var string = '';
    var peak = '/\\';
    var valley = '___';
    for (var i = 0; i < numPeaks; i++) {
      string += peak;
    }
    for (var j = 0; j < numValleys; j++) {
      string += valley;
    }
    return string;
  },

  returnOne: function (peakOrValley) {
    return peakOrValley == 'peak' ? '/\\' : '___';
  }
};
