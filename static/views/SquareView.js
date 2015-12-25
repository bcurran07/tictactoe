var SquareView = Marionette.ItemView.extend({
    className: 'square',

    events: {
        click: 'checkSquare',
    },

    bindings: {
        ':el': {
            observe: 'display',
            update: function($el, val, model, options) {
                $el.html(val);
            }
        }
    },

    render: function() {
        this.stickit();
    },

    checkSquare: function () {
        var playerPiece;
        if (this.model.get('value') === undefined) {
            this.generatePlayerTurn();
        }
    },

    generatePlayerTurn: function() {
        var player = this.getCurrentPlayer();
        this.setDisplay(player);
        this.setSquareValue(player);
        this.trigger('check:for:end');
        this.shiftTurn();
    },

    setDisplay: function(player) {
        this.model.set('display', player.get('display'));
    },

    setSquareValue: function(player) {
        this.model.set('value', player.get('piece'));
    },

    getCurrentPlayer: function() {
        if (this.options.firstPlayer.get('turn')) {
            return this.options.firstPlayer;
        }
        else {
            return this.options.secondPlayer;
        }
    },

    shiftTurn: function() {
        this.options.firstPlayer.shiftTurn();
        this.options.secondPlayer.shiftTurn();
    },
});
