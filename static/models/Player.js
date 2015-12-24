var Player = Backbone.Model.extend({
    shiftTurn: function() {
        var newTurn = !this.get('turn');
        this.set({'turn': newTurn});
    }
});
