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
            var row = new Row();
            this.collection.add(row);
        }
    },

    onAddChild: function(childView){
        this.listenTo(childView, 'check:for:winner', this.checkForWinner);
    },

    checkForWinner: function(collection) {

    },
});
