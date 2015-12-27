"use strict";

var Router = Backbone.Router.extend({
  routes : {
    '' : 'index',
  },

  index : function() {
    var boardView, gameEndedView, boardLayout;

    boardLayout = new BoardLayout();
    boardView = this.generateNewGame();

    $('body').append(boardLayout.render().el);
    boardLayout.boardRegion.show(boardView);

    boardLayout.listenTo(boardView, 'game:end', function (gameWinner) {
      gameEndedView = new GameEndedView({model: gameWinner});
      boardLayout.removeRegion('boardRegion');
      boardLayout.endedGameRegion.show(gameEndedView);
    });
  },

  generateNewGame: function() {
    var firstPlayer, secondPlayer, board, boardView, boardLayout;

    firstPlayer = new Player();
    firstPlayer.generateFirstPlayer();

    secondPlayer = new Player();
    secondPlayer.generateSecondPlayer();

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
