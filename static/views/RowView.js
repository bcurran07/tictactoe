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
        this.collection = new Backbone.Collection();
        this.generateSquares();
    },

    onAddChild: function(childView){
        this.listenTo(childView, 'check:for:winner', function() {
            this.trigger('check:for:winner', this.collection);
        });
    },

    generateSquares: function() {
        for (var i = 0; i < this.options.squareCount; i++) {
            var square = new Square();
            this.collection.add(square);
        }
    },
});
