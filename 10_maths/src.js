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
