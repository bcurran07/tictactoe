var RowView = Marionette.CompositeView.extend({
    template: _.template('<div class="board-row"></div>'),
    childViewContainer: '.board-row',
    childView: SquareView,

    initialize: function() {
        this.collection = new Backbone.Collection();
        this.generateSquares();
    },

    generateSquares: function() {
        for (var i = 0; i < this.options.squareCount; i++) {
            var square = new Square();
            this.collection.add(square);
        }
    },
});
