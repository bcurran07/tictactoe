describe("Player", function () {
    var player;
    beforeEach(function () {
        player = new Player({turn: true});
    });

    it('toggles a boolean for the turn attribute', function() {
       expect(player.get('turn')).toBeTruthy();
       player.shiftTurn();
       expect(player.get('turn')).toBeFalsy();
       player.shiftTurn();
       expect(player.get('turn')).toBeTruthy();

    });
});
