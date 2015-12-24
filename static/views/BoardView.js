var BoardView = Marionette.CollectionView.extend({
    template: _.template('<div class="board"></div>'),
    childViewContainer: '.board',
    childView: RowView,

    childViewOptions: function(model, index) {
        return {
            squareCount: this.options.rowCount,
        };
    },

    initialize: function() {
        this.collection = new Backbone.Collection();
        this.generateRows();
    },

    generateRows: function() {
        for (var i = 0; i < this.options.rowCount; i++) {
            var row = new Row();
            this.collection.add(row);
        }
    }
});
