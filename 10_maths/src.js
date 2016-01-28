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
    var sum = 0;
    arrayOfNumbers.forEach(function (num) {
      sum += num;
    });
    return sum / arrayOfNumbers.length;
  },

  matrixRowMaximum: function(arrayOfArrays) {
    var that = this;
    var result = [];
    arrayOfArrays.forEach(function (array) {
      result.push(that.maximum(array));
    });
    return result;
  },

  matrixRowMinimum: function(arrayOfArrays) {
  return this.matrixRowMath(arrayOfArrays, this.minimum);
  },

  matrixRowAverage: function(arrayOfArrays) {
    return this.matrixRowMath(arrayOfArrays, this.average);
  },

  matrixRowMath: function (arrayOfArrays, callback) {
    var result = [];
    arrayOfArrays.forEach(function (array) {
      result.push(callback(array));
    });
    return result;
  },

  sortedRowMatrix: function(arrayOfArrays) {
    return arrayOfArrays.map(function (array) {
      return array.sort();
    })
  },

  lengthOfWords: function(sentence) {
    return sentence.split(' ').map(function (word) {
      return word.length;
    })
  }
}
