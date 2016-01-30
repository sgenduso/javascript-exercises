var Person = function(name, weight) {
  this.name = name;
  this.weight = weight;
};

Person.prototype.eat = function () {
  this.weight ++;
  return this;
};

module.exports = Person;
