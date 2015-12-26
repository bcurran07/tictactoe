describe('RowView', function(){

  var firstPlayer = new Player(),
      secondPlayer = new Player(),
      rowView = new RowView({
        firstPlayer: firstPlayer,
        secondPlayer: secondPlayer,
        squareCount: 3,
      });

  beforeEach(function() {
    firstPlayer.generateFirstPlayer();
    secondPlayer.generateSecondPlayer();
  });


  it('triggers the game:end event when a row\'s values are identical', function() {
    var spy = jasmine.createSpy();

    rowView.collection.each(function(square) {
      square.set('value', 'x');
    });

    rowView.on('game:end', spy);
    rowView.checkForHorizontalWin();
    expect(spy).toHaveBeenCalled();
  });
});
