class View {
  constructor(game, $el) {
    this.game = game;
    this.$board = $el;
    this.setupBoard();
  }
  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $ul = $('<ul>');
    for (let i = 0; i < 9; i++) {
      $ul.append($('<li></li>'))
    }
    this.$board.append($ul)
  }
}

module.exports = View;
