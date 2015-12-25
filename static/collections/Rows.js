var Rows = Backbone.Collection.extend({
    model: Row,

    checkHorizontal: function(row) {
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

    checkVertical: function(rows) {

    },

    checkDiagonal: function() {

    },

});
