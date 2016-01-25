/*

  A tree can be represented by a single Node, that has a:

    * name and a value
    * a parent
    * an array of children

  Implement this node using the "classical" inheritance, so that the following
  would work:

    var node = new Node('foo');

*/

var Node = function(name) {
  this.name = name;
  this.parent = null;
  this.children = [];
};

module.exports = Node;
