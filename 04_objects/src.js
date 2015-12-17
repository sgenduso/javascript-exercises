module.exports = {
  person: function() {
    return {
      firstName: 'John',
      lastName: 'Mayer'
    };
  },

  sweetnessProperty: function(obj) {
    return obj.sweetness;
  },

  savorynessProperty: function(obj) {
    return obj['savory-ness'];
  },

  keys: function(obj) {
    var keys = [];
    for (var key in obj) {
      keys.push(key);
    }
    return keys;
  },

  sortedKeys: function() {

  },

  reverseSortedKeys: function() {

  }
};
