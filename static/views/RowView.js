var RowView = Marionette.CompositeView.extend({
    template: _.template('<div class="board-row"></div>'), // gross, but we can't just set the className here
    childViewContainer: '.board-row',
    childView: SquareView,

    childViewOptions: function(model, index) {
        return {
            firstPlayer: this.options.firstPlayer,
            secondPlayer: this.options.secondPlayer,
        };
    },

    initialize: function() {
        this.collection = new Squares();
        this.generateSquares();
    },

    onAddChild: function(childView){
        this.listenTo(childView, 'check:for:end', this.checkForHorizontalWin);
    },

    checkForHorizontalWin: function() {
        var winningPlayer;

        if (this.collection.horizontalWin() === true) {
            winningPlayer = this.getWinningPlayer();
            this.trigger('game:end', winningPlayer);
        }
        else {
            this.trigger('check:for:end');
        }
    },

    getWinningPlayer: function() {
        // let's take another look at this later
        var winningValue = this.collection.first().get('value');

        if (winningValue === this.options.firstPlayer.get('piece')) {
            return this.options.firstPlayer;
        }

        else {
            return this.options.secondPlayer;
        }
    },

    generateSquares: function() {
        for (var i = 0; i < this.options.squareCount; i++) {
            var square = new Square();
            this.collection.add(square);
        }
    },
});
