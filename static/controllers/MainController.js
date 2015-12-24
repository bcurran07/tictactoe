
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
    var firstPlayer, secondPlayer, boardView, boardLayout;

    firstPlayer = new Player({
      piece: '&#10006',
      turn: true,
    });

    secondPlayer = new Player({
      piece: '&#9675',
      turn: false,
    });

    boardView = new BoardView({
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
