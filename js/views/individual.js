var app = app || {};

app.IndividualView = Backbone.View.extend({
  tagName: 'div',
  className: 'show-user',
  events: {
    // 'click a': 'showIndividual',
    // "submit .add-badge": "addTag"
  },
  initialize: function() {
    this.template = _.template($('#badgeTemplate').html());
    this.render();
  },

  render: function() {
    console.log("hello, render individual")
    this.$el.html(this.template(this.model.attributes));
    // console.log(this);
    return this;
  },


});
