var SquareView = Marionette.ItemView.extend({
    template: _.template('<div class="square"></div>'),
    tagName: 'span',

    events: {
        'click': 'checkSquare',
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    checkSquare: function () {

    }
});
