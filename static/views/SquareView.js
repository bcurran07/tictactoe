var SquareView = Marionette.ItemView.extend({
    template: _.template('<div class="square"></div>'),
    tagName: 'span',

    events: {
        click: 'checkSquare',
    },

    bindings: {
        '.square': {
            observe: 'value',
            update: function($el, val, model, options) {
                $el.html(val);
            }
        }
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        this.stickit();
        return this;
    },

    checkSquare: function () {
        var playerPiece;
        if (this.model.get('value') === undefined) {
            playerPiece = this.getPieceValue();
            this.setSquareValue(playerPiece);
        }
    },

    setSquareValue: function(pieceValue) {
        this.model.set('value', pieceValue);
    },

    getPieceValue: function() {
        if (this.options.firstPlayer.get('turn')) {
            return this.options.firstPlayer.get('piece');
        }
        else {
            return this.options.secondPlayer.get('piece');
        }
    },
});
