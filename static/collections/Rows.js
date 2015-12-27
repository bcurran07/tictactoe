var Rows = Backbone.Collection.extend({
    model: Row,

    getBoardVals: function() {
        return this.map(function (model) {
            return model.get('squares').pluck('value');
        });
    },

    checkForWinner: function() {
        var boardVals = this.getBoardVals();

        return this.horizontalWin(boardVals) ||
               this.verticalWin(boardVals) ||
               this.diagonalWin(boardVals);
    },

    horizontalWinner: function(boardVals) {
        _.each(boardVals, function(val) {
            if (val === undefined) {
                return false;
            }
            else if (val[0] === val[1] && val[1] === val[2]) {
                return val[0];
            }
        });

        return false;
    },

    verticalWinner: function(boardVals) {
        for (var i = 0; i <= boardVals.length; i++) {
            if (boardVals[0][i] === undefined) {
                continue;
            }
            else if (boardVals[0][i] === boardVals[1][i] &&
                     boardVals[1][i] === boardVals[2][i]) {
                return boardVals[0][i];
            }
        }
        return false;
    },

    diagonalWinner: function(boardVals) {
        var forwardDiagonal = boardVals[0][0] === boardVals[1][1] &&
                              boardVals[1][1] === boardVals[2][2],
            reverseDiagonal = boardVals[0][2] === boardVals[1][1] &&
                              boardVals[2][0] === boardVals[1][1];
        if (boardVals[0][0] === undefined || forwardDiagonal === false ||
            reverseDiagonal === false) {
            return false;
        }
        return boardVals[0][0];
    },

    checkForTie: function() {
        _.each(boardVals, function(rowVal) {
            if (rowVal.indexOf(undefined) > -1) {
                return true;
            }
        });
        return false;
    },
});
