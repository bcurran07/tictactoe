"use strict";

describe('Rows', function() {
    var rowCollection;

    beforeEach(function() {
        rowCollection = new Rows();
        for (var i = 0; i < 3; i++) {
            rowCollection.add(new Backbone.Model({
                'squares': new Backbone.Collection(
                    [
                        {value: undefined},
                        {value: undefined},
                        {value: undefined},
                    ]
            )}));
        }
    });

    it('returns the winning piece using the horizontalWinner method upon a horizontal win', function() {
        var horizontalWin = new Backbone.Collection([{value: 'x'}, {value: 'x'}, {value: 'x'}]),
            boardVals = rowCollection.getBoardVals();

        expect(rowCollection.horizontalWinner(boardVals)).toBeFalsy();

        rowCollection.first().set('squares', horizontalWin);
        boardVals = rowCollection.getBoardVals();

        expect(rowCollection.checkForWinner()).toBeTruthy();
        expect(rowCollection.horizontalWinner(boardVals)).toEqual('x');
    });

    it('returns the winning piece using the verticalWinner method upon a vertical win', function(){
        var rowOne = new Backbone.Collection([{value: 'o'}]),
            rowTwo = new Backbone.Collection([{value: 'o'}]),
            rowThree = new Backbone.Collection([{value: 'o'}]),
            boardVals = rowCollection.getBoardVals();

        expect(rowCollection.verticalWinner(boardVals)).toBeFalsy();

        rowCollection.first().set('squares', rowOne);
        rowCollection.at(1).set('squares', rowTwo);
        rowCollection.last().set('squares', rowThree);

        boardVals = rowCollection.getBoardVals();

        expect(rowCollection.checkForWinner()).toBeTruthy();
        expect(rowCollection.verticalWinner(boardVals)).toEqual('o');
    });

    it('returns the winning piece using the diagonalWinner method upon a diagonal win', function() {
        var rowOne = new Backbone.Collection([{}, {}, {value: 'x'}]),
            rowTwo = new Backbone.Collection([{}, {value: 'x'}, {}]),
            rowThree = new Backbone.Collection([{value: 'x'}]),
            boardVals = rowCollection.getBoardVals();

        expect(rowCollection.diagonalWinner(boardVals)).toBeFalsy();

        rowCollection.first().set('squares', rowOne);
        rowCollection.at(1).set('squares', rowTwo);
        rowCollection.last().set('squares', rowThree);

        boardVals = rowCollection.getBoardVals();

        expect(rowCollection.checkForWinner()).toBeTruthy();
        expect(rowCollection.diagonalWinner(boardVals)).toEqual('x');

    });

    it('can accurately determine whether a tie has been reached', function() {
        var rowOne = new Backbone.Collection([{value: 'o'}, {value: 'x'}, {value: 'o'}]),
            rowTwo = new Backbone.Collection([{value: 'x'}, {value: 'o'}, {value: 'x'}]),
            rowThree = new Backbone.Collection([{value: 'x'}, {value: 'o'}, {value: 'x'}]);

        expect(rowCollection.gameIsTied()).toBeFalsy();

        rowCollection.first().set('squares', rowOne);
        rowCollection.at(1).set('squares', rowTwo);
        rowCollection.last().set('squares', rowThree);

        expect(rowCollection.gameIsTied()).toBeTruthy();

    });
});