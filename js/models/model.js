var app = app || {};

app.Individual = Backbone.Model.extend({
  // default values for model when new app.Post() is called
  defaults: function() {
    return {
      tag: 'Good person',
      votes: 0
    }
  }
});
