class View {
  constructor(game, $el) {
    this.game = game;
    this.$board = $el;
    this.setupBoard();
    this.bindEvents();
  }
  bindEvents() {
    $('ul').on('click', 'li', (event) => {
      this.makeMove($(event.currentTarget));
    })
  }

  makeMove($square) {
    // debugger
    if ($square.hasClass('click')) {
      alert("invalid move try again")
    } else {
      // debugger
      let i = $('li').index($square[0]);
      let player = this.game.currentPlayer;
      this.game.playMove([i % 3, Math.floor(i / 3)]);
      $square.append(player);
      $square.addClass('click');
    }
  }

  setupBoard() {
    let $ul = $('<ul>');
    for (let i = 0; i < 9; i++) {
      $ul.append($('<li class="unclicked"></li>'))
    }
    this.$board.append($ul)
  }
}

module.exports = View;
