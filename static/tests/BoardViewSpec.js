"use strict";

describe('RowView', function(){

  var firstPlayer = new Player(),
      secondPlayer = new Player(),
      boardView = new BoardView({
        model: new Backbone.Model(),
        firstPlayer: firstPlayer,
        secondPlayer: secondPlayer,
        rowCount: 3,
      });

  beforeEach(function() {
    firstPlayer.generateFirstPlayer();
    secondPlayer.generateSecondPlayer();
    boardView.render();
  });


  it('triggers the game:end event with a horizontal win', function() {
    var spy = jasmine.createSpy('game:end'),
        horizontalWin = new Backbone.Collection([
          {value: 'x'},
          {value: 'x'},
          {value: 'x'}
        ]);

    boardView.collection.first().set('squares', horizontalWin);

    boardView.on('game:end', spy);
    boardView.checkForEnd();
    expect(spy).toHaveBeenCalled();
  });

  it('triggers the game:end event when a vertical value has been reached', function() {
    var spy = jasmine.createSpy('game:end'),
        rowOne = new Backbone.Collection([{value: 'o'}]),
        rowTwo = new Backbone.Collection([{value: 'o'}]),
        rowThree = new Backbone.Collection([{value: 'o'}]);

    boardView.collection.first().set('squares', rowOne);
    boardView.collection.at(1).set('squares', rowTwo);
    boardView.collection.last().set('squares', rowThree);

    boardView.on('game:end', spy);
    boardView.checkForEnd();
    expect(spy).toHaveBeenCalled();
  });

  it('triggers the game:end event when a diagonal value has been reached', function() {
     var spy = jasmine.createSpy('game:end'),
         rowOne = new Backbone.Collection([{value: 'o'}]),
         rowTwo = new Backbone.Collection([{}, {value: 'o'}, {}]),
         rowThree = new Backbone.Collection([{}, {}, {value: 'o'}]);

     boardView.collection.first().set('squares', rowOne);
     boardView.collection.at(1).set('squares', rowTwo);
     boardView.collection.last().set('squares', rowThree);

     boardView.on('game:end', spy);
     boardView.checkForEnd();
     expect(spy).toHaveBeenCalled();
  });

  it('triggers the game:end event when a tie has been reached', function() {
    var spy = jasmine.createSpy('game:end'),
        rowOne = new Backbone.Collection([{value: 'o'}, {value: 'x'}, {value: 'o'}]),
        rowTwo = new Backbone.Collection([{value: 'x'}, {value: 'o'}, {value: 'x'}]),
        rowThree = new Backbone.Collection([{value: 'x'}, {value: 'o'}, {value: 'x'}]);

    boardView.collection.first().set('squares', rowOne);
    boardView.collection.at(1).set('squares', rowTwo);
    boardView.collection.last().set('squares', rowThree);


    boardView.on('game:end', spy);
    boardView.checkForEnd();
    expect(spy).toHaveBeenCalled();
  });
});

