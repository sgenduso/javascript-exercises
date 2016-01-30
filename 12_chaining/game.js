    var Game = function() {
      this.score = 0;
    };

    Game.prototype.hit = function () {
      this.score += 1;
      return this;
    };

    Game.prototype.miss = function () {
      this.score -= 1;
      return this;
    };

    module.exports = Game;
