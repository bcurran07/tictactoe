
var Router = Backbone.Router.extend({
  routes : {
    '' : 'index',
  },
  index : function() {
    var firstPlayer = new Player({'piece': '&#10006'}),
        secondPlayer = new Player({'piece': '&#9675'}),
        boardView = new BoardView({
          firstPlayer: firstPlayer,
          secondPlayer: secondPlayer,
          rowCount: 3,
        }),
        boardLayout = new BoardLayout();

    $('body').append( boardLayout.render().el );
    boardLayout.board.show(boardView);
  },
});

$(function() {
  new Router();
  Backbone.history.start();
});
