describe('Player', function () {
    var firstPlayer, secondPlayer;

    beforeEach(function () {
      firstPlayer = new Player();
      secondPlayer = new Player();

      firstPlayer.generateFirstPlayer();
      secondPlayer.generateSecondPlayer();
    });

    it('generates player values', function() {
      expect(firstPlayer.get('piece')).toBe('x');
      expect(secondPlayer.get('piece')).toBe('o');

      expect(firstPlayer.get('display')).toBe('<div class="cross"></div>');
      expect(secondPlayer.get('display')).toBe('<div class="circle"></div>');

      expect(firstPlayer.get('name')).toBe('Player One');
      expect(secondPlayer.get('name')).toBe('Player Two');
    });

    it('toggles a boolean for the turn attribute', function() {
      expect(firstPlayer.get('turn')).toBeTruthy();

      firstPlayer.shiftTurn();
      expect(firstPlayer.get('turn')).toBeFalsy();

      firstPlayer.shiftTurn();
      expect(firstPlayer.get('turn')).toBeTruthy();
    });
});
