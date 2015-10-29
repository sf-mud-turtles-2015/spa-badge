var app = app || {};
app.Individuals = Backbone.Collection.extend({
  model: app.Individual,
  localStorage: new Backbone.LocalStorage('SPABadge')
});
