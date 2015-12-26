var Player = Backbone.Model.extend({
    shiftTurn: function() {
        var newTurn = !this.get('turn');
        this.set({'turn': newTurn});
    },

    generateFirstPlayer: function() {
        this.set({
            name: 'Player One',
            piece: 'x',
            display: '<div class="cross"></div>',
            turn: true,
        });
    },

    generateSecondPlayer: function() {
        this.set({
            name: 'Player Two',
            piece: 'o',
            display: '<div class="circle"></div>',
            turn: false,
        });
    },
});
