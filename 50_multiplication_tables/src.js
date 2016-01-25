/*
  Return the multiplication tables as a string.
  The top-left starts at 0, then the numbers go up across the top and down.

        1  2  3  4
     1  1  2  3  4
     2  2  4  6  8
     3  3  6  9 12
     4  4  8 12 16

  The result should be a single string, with newlines separating the rows.

*/

module.exports = {
  twoTimesTable: function() {
    return '   1 2\n' +
           ' 1 1 2\n' +
           ' 2 2 4';
  },

  timesTable: function(number) {
    var output = '';
    var multipliers = [];
    for (var i = 0; i <= number; i++) {
      multipliers[i] = i;
    }
    for (var i = 0; i <= number; i++) {
      var thisRow = [];
      for (var j = 0; j < multipliers.length; j++) {
        if (i == 0) {
          if (j == 0) {
            thisRow[j] = '  ';
          } else {
            thisRow[j] = ' ' + multipliers[j];
          }
        } else if (j == 0) {
          thisRow[j] = '  ' + multipliers[i];
        } else {
          thisRow[j] = ' ' + multipliers[i] * j;
        }
      }
      output += thisRow.join(' ') + '\n';
    }
    return output.slice(0, -1);
  }
}
