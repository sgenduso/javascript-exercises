/*
  Do not use standard libraries (like Math) to complete this warm-up.
*/

module.exports = {
  maximum: function(array) {
    max = array.length ? 0 : undefined;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  },

  minimum: function(array) {
    var min = undefined;
    for (var i = 0; i < array.length; i++) {
      if (i == 0) {
        min = array[i];
      }
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  },

  average: function(arrayOfNumbers) {
  },

  matrixRowMaximum: function(arrayOfArrays) {
  },

  matrixRowMinimum: function(arrayOfArrays) {
  },

  matrixRowAverage: function(arrayOfArrays) {
  },

  sortedRowMatrix: function(arrayOfArrays) {
  },

  lengthOfWords: function(sentence) {
  }
}
