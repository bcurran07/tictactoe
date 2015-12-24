var SquareView = Marionette.ItemView.extend({
    tagName: 'span',
    className: 'square',

    events: {
        click: 'checkSquare',
    },

    bindings: {
        ':el': {
            observe: 'value',
            update: function($el, val, model, options) {
                $el.html(val);
            }
        }
    },

    render: function() {
        this.stickit();
        return this;
    },

    checkSquare: function () {
        var playerPiece;
        if (this.model.get('value') === undefined) {
            this.setSquareValue();
        }
    },

    setSquareValue: function() {
        var playerPiece = this.getPieceValue();
        this.model.set('value', playerPiece);
        this.shiftTurn();
    },

    getPieceValue: function() {
        if (this.options.firstPlayer.get('turn')) {
            return this.options.firstPlayer.get('piece');
        }
        else {
            return this.options.secondPlayer.get('piece');
        }
    },

    shiftTurn: function() {
        this.options.firstPlayer.shiftTurn();
        this.options.secondPlayer.shiftTurn();
    },
});
