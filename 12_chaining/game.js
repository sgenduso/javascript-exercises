    var Game = function() {
      this.score = 0;
    };

    Game.prototype.hit = function () {
      console.log('hit');
      this.score += 1;
      return Game;
    };

    Game.prototype.miss = function () {
      console.log('miss');
      this.score -= 1;
      return Game;
    };

    module.exports = {
      Game: new Game(),
    }
