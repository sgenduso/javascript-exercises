module.exports = {

  simpleCall: function(callback){
    return callback();
  },

  each: function(array, callback){
    for (var i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  },

  map: function (array, callback) {
    var returnArr = [];
    for (var i = 0; i < array.length; i++) {
      returnArr[i] = callback(array[i]);
    }
    return returnArr;
  },

  reduce: function (array, startVal, callback) {
    var val;
    if (typeof(startVal) == 'number') {
      val = 0;
    } else{
      startVal = (array.indexOf(startVal) > -1) ? array.indexOf(startVal) : 0;
      val = '';
    }
    for (var i = startVal; i < array.length; i++) {
      val = callback(val, array[i]);
    }
    return val;
  },

  find: function (array, callback) {
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return array[i];
      }
    }
  },

  any: function (array, callback) {
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return true;
      }
    }
      return false;
  },

  all: function (array, callback) {
    for (var i = 0; i < array.length; i++) {
      if (!callback(array[i])) {
        return false;
      }
    }
    return true;
  }
};
