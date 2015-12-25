var Squares = Backbone.Collection.extend({
    model: Square,

    horizontalWin: function() {
        var row = this.pluck('value');

        for (var i = 1; i < row.length; i++) {
            if (row[i] === undefined) {
                return false;
            }
            else if (row[i - 1] !== row[i]) {
                return false;
            }
        }
        return true;
    },
});
