var BoardLayout = Marionette.LayoutView.extend({
    template: _.template('<div class="board-layout"></div>'),
    regions: {
        board: '.board-layout',
    }
});
