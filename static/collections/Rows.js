"use strict";

var Rows = Backbone.Collection.extend({
    getBoardVals: function() {
        return this.map(function (model) {
            return model.get('squares').pluck('value');
        });
    },

    getWinner: function() {
        var boardVals = this.getBoardVals();

        return this.horizontalWinner(boardVals) ||
               this.verticalWinner(boardVals) ||
               this.diagonalWinner(boardVals);
    },

    horizontalWinner: function(boardVals) {
        var winner = false;
        _.each(boardVals, function(val) {
            if (val.indexOf(undefined) > -1) {
                return false;
            }
            else if (val[0] === val[1] && val[1] === val[2]) {
                winner = val[0][0];
            }
        });

        return winner;
    },

    verticalWinner: function(boardVals) {
        var winner = false;
        for (var i = 0; i <= boardVals.length; i++) {
            if (boardVals[0][i] === undefined) {
                continue;
            }
            else if (boardVals[0][i] === boardVals[1][i] &&
                     boardVals[1][i] === boardVals[2][i]) {
                winner = boardVals[0][i];
            }
        }
        return winner;
    },

    diagonalWinner: function(boardVals) {
        var backDiagonal = boardVals[0][0] === boardVals[1][1] &&
                           boardVals[2][2] === boardVals[1][1],
            forwardDiagonal = boardVals[0][2] === boardVals[1][1] &&
                              boardVals[2][0] === boardVals[1][1];

        if (boardVals[1][1] === undefined || forwardDiagonal === false &&
            backDiagonal === false) {
            return false;
        }
        return boardVals[1][1];
    },

    gameIsTied: function() {
        var tieGame = true,
            boardVals = this.getBoardVals();

        _.each(boardVals, function(rowVal) {
            if (rowVal.indexOf(undefined) > -1) {
                tieGame = false;
                return;
            }
        });
        return tieGame;
    },
});
