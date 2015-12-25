var GameEndedView = Marionette.ItemView.extend({
    template: _.template('<div class="game-over"><h3><span class="winner-name"></span> has won!</h3><button>Play again?</button></div>'),
});
