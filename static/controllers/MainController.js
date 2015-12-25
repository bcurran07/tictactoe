
var Router = Backbone.Router.extend({
  routes : {
    '' : 'index',
  },

  index : function() {
    var boardView, boardLayout;

    boardLayout = new BoardLayout();
    boardView = this.generateNewGame();

    $('body').append( boardLayout.render().el );
    boardLayout.board.show(boardView);

  },

  generateNewGame: function() {
    var firstPlayer, secondPlayer, board, boardView, boardLayout;

    firstPlayer = new Player({
      display: '<div class="cross"></div>',
      turn: true,
      piece: 'x',
    });

    secondPlayer = new Player({
      display: '<div class="circle"></div>',
      turn: false,
      piece: 'o',
    });

    board = new Board();

    boardView = new BoardView({
      model: board,
      firstPlayer: firstPlayer,
      secondPlayer: secondPlayer,
      rowCount: 3,
    });

    return boardView;
  },

});

$(function() {
  new Router();
  Backbone.history.start();
});
