/*
  A matrix is a rectangular array of numbers, symbols, or expressions,
  arranged in rows and columns (http://en.wikipedia.org/wiki/Matrix_%28mathematics%29),
  it should look like something we saw in the maths exercise.

  An example matrix looks like this:
    [ 1  2  3 ]
    [ 4  5  6 ]

  If a matrix contains m rows and n columns, it is said to be a m-by-n matrix.

  The identity matrix is a special matrix, it is square (e.g. same number of rows and
  columns), and contains the value `1` in every position where the row number is equal
  to the column number, and the value `0` everywhere else. A 3X3 identity matrix
  looks as follows:

    [ 1  0  0 ]
    [ 0  1  0 ]
    [ 0  0  1 ]

  For the purpose of computing, we can also think of a matrix as an array of arrays,
  where each element of the parent (top-level) array, is an array representing a
  row of the matrix. In code the 3X3 identity matrix would look as follows:

    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]

  All of these warm-ups deal with matrices (plural of "matrix").
*/

module.exports = {
  twoByTwoIdentityMatrix: function() {
    return [
      [1,0],
      [0,1]
    ];
  },

  identityMatrix: function(n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
      matrix[i] = [];
      for (var j = 0; j < n; j++) {
        matrix[i][j] = (i === j) ? 1 : 0;
        }
      }
      return matrix;
    },

  matrixAddition: function (arr1, arr2) {
    var matrix = [];
    for (var i = 0; i < arr1.length; i++) {
      matrix[i] = [];
      for (var j = 0; j < arr1.length; j++) {
        matrix[i][j] = arr1[i][j] + arr2[i][j];
      }
    }
    return matrix;
  },

  matrixSubtraction: function (arr1, arr2) {
    var matrix = [];
    for (var i = 0; i < arr1.length; i++) {
      matrix[i] = [];
      for (var j = 0; j < arr1.length; j++) {
        matrix[i][j] = arr1[i][j] - arr2[i][j];
      }
    }
    return matrix;
  },

  matrixConstantMultiplication: function (multiplier, array) {
    var matrix = [];
    for (var i = 0; i < array.length; i++) {
      matrix[i] = [];
      for (var j = 0; j < array.length; j++) {
        matrix[i][j] = array[i][j] * multiplier;
      }
    }
    return matrix;
  }


}
