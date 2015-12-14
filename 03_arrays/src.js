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
    
  }

};
