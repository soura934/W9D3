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
      let $h1 = $('<h1 class="player"></h1>').text(player);
      $square.append($h1);
      $square.addClass('click');
      
      if(this.game.isOver()){
        let $h2 = $('<h2></h2>').text(`You win, ${this.game.winner()}`);
        $("body").append($h2);
      }
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
