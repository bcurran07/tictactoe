var GameEndedView = Marionette.ItemView.extend({
    template: _.template('<div class="game-over"><h3><span class="winner-name"></span> has won!</h3><p><button>Play again?</button></p></div>'),

    bindings: {
        '.winner-name': 'name',
    },

    events: {
        'click button': 'startNewGame',
    },

    onRender: function() {
        this.stickit();
    },

    startNewGame: function() {
        window.location.href = '';
    }
});
