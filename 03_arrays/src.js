module.exports = {

  first: function(array) {
    return array[0];
  },

  last: function (array) {
    return array[array.length-1];
  },

  empty: function (array) {
    return !array.length;
  },

  first_n: function (array, n) {
    if (array.length === 0 || array.length < n) {
      return array;
    } else {
      return array.splice(0, n);
    }
  },

  last_n: function (array, n) {
    if (array.length === 0 || array.length < n) {
      return array;
    } else {
      return array.splice(array.length-n, array.length + 1);
    }
  },

  drop: function (array, n) {
    if (array.length < n) {
      return [];
    } else {
      return array.splice((n), (array.length + 1));
    }
  },

  union: function (array1, array2) {
    if (!array1.length && !array2.length) {
      return [];
    } else {
      return array1.concat(array2);
    }
  },

  intersection: function (array1, array2) {}

};
