"use strict";

var BoardView = Marionette.CollectionView.extend({
    className: 'board',
    childViewContainer: '.board',
    childView: RowView,

    childViewOptions: function(model, index) {
        return {
            squareCount: this.options.rowCount,
            firstPlayer: this.options.firstPlayer,
            secondPlayer: this.options.secondPlayer,
        };
    },

    initialize: function() {
        this.collection = new Rows();
        this.generateRows();
    },

    generateRows: function() {
        for (var i = 0; i < this.options.rowCount; i++) {
            var row = new Backbone.Model();
            this.collection.add(row);
        }
    },

    onAddChild: function(childView){
        this.listenTo(childView, 'check:for:end', this.checkForEnd);
        this.listenTo(childView, 'game:end', this.showGameEndedView);
    },

    showGameEndedView: function(winningPlayer) {
        this.trigger('game:end', winningPlayer);
    },

    checkForEnd: function() {
        var winningPiece = this.collection.checkForWinner();
        if (winningPiece !== false) {
            this.showGameEndedView(this.getWinningPlayer(winningPiece));
        }
        else if (this.collection.gameIsTied()) {
            this.trigger('game:end', new Player({name: 'Nobody'}));
        }
    },

    getWinningPlayer: function(winningPiece) {
        if (winningPiece === this.options.firstPlayer.get('piece')) {
            return this.options.firstPlayer;
        }
        else {
            return this.options.secondPlayer;
        }
    },
});
