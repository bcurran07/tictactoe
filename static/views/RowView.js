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
        this.listenTo(childView, 'check:for:end', this.checkForEnd);
    },

    checkForEnd: function() {
        this.trigger('check:for:end');
    },

    generateSquares: function() {
        for (var i = 0; i < this.options.squareCount; i++) {
            var square = new Square();
            this.collection.add(square);
        }
        this.model.set('squares', this.collection);
    },
});
