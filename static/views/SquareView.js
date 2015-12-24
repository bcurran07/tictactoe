var SquareView = Marionette.ItemView.extend({
    template: _.template('<div class="square"></div>'),
    tagName: 'span',
    render: function() {
      this.$el.html(this.template());
      return this;
    }
});
