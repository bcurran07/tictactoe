describe('Squares', function () {
  var squareCollection;

  beforeEach(function () {
    squareCollection = new Squares();
    for (var i = 0; i < 3; i++) {
      var square = new Square();
      squareCollection.add(square);
    }
  });

  it('can determine whether a player has won through horizontal squares', function() {
    expect(squareCollection.horizontalWin()).toBeFalsy();

    squareCollection.first().set('value', 'x');
    expect(squareCollection.horizontalWin()).toBeFalsy();

    squareCollection.at(1).set('value', 'x');
    expect(squareCollection.horizontalWin()).toBeFalsy();

    squareCollection.last().set('value', 'x');
    expect(squareCollection.horizontalWin()).toBeTruthy();
  });
});
