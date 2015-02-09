/*
  Round-Robin is a way to rotate an array of elements such that each element
  can be paired with every other element exactly once.  In sports, this means
  each team plays every other team exactly once.

  Imagine you have an array like [a,b,c,d,e,f].  First, split the array in half:

  [a,b,c]
  [d,e,f]

  For the first rotation, keep `a` in the same position, but _rotate_ all the other
  elements clockwise:

  [a,d,b]
  [e,f,c]

  Continue doing this until the array is back at the same position.

  Then, take each pair.
*/

module.exports = function (input) {
};
