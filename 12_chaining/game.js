module.exports = {
  function Game() {
    this.score = 0;
  }

  Game.prototype.hit = function () {
    return this.score + 1;
  }

  Game.prototype.miss = function () {
    return this.score - 1;
  }
}
