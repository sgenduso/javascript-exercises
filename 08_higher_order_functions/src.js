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
  },

  reduce: function (array, startVal, callback) {
    var val;
    for (var i = startVal; i < array.length; i++) {
      callback(val, array[i]);
    }
  }
};
