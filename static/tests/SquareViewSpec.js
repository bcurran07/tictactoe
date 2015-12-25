describe("SquareView", function () {

    var firstPlayer, secondPlayer, square, squareView;

    beforeEach(function () {
        firstPlayer = new Player({
          display: '<div class="cross"></div>',
          turn: true,
          piece: 'x'
        });

        secondPlayer = new Player({
          display: '<div class="circle"></div>',
          turn: false,
          piece: 'o'
        });

        square = new Square();

        squareView = new SquareView({
          model: square,
          firstPlayer: firstPlayer,
          secondPlayer: secondPlayer,
        });

        squareView.render();
    });

    it('shifts player turns', function() {
       expect(firstPlayer.get('turn')).toBeTruthy();
       expect(secondPlayer.get('turn')).toBeFalsy();

       squareView.generatePlayerTurn();

       expect(firstPlayer.get('turn')).toBeFalsy();
       expect(secondPlayer.get('turn')).toBeTruthy();

    });

    it('prevents a turn from taking place if a value exists in the square', function() {
      expect(firstPlayer.get('turn')).toBeTruthy();
      expect(secondPlayer.get('turn')).toBeFalsy();

      square.set('value', 'o');
      squareView.checkSquare();

      expect(firstPlayer.get('turn')).toBeTruthy();
      expect(secondPlayer.get('turn')).toBeFalsy();

    });

    it('sets an external display and internal value once a turn has successfully taken place', function() {
       squareView.generatePlayerTurn();
       expect(square.get('display')).toEqual(firstPlayer.get('display'));
       expect(square.get('value')).toEqual(firstPlayer.get('piece'));

    });
});
