"use strict";

var BoardLayout = Marionette.LayoutView.extend({
    template: _.template('<div class="board-layout"><div class="board-region"></div><div class="ended-game-region"></div></div>'),
    regions: {
        boardRegion: '.board-region',
        endedGameRegion: '.ended-game-region',
    }
});
