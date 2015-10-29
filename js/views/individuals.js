var app = app || {};

app.IndividualsView = Backbone.View.extend({
  el: 'body',
  events: {
    'submit form': 'addTag'
  },

  initialize: function() {
    this.collection = new app.Individuals();
    this.collection.fetch({reset: true});
    this.render();
    // console.log("hello");

    this.listenTo(this.collection, 'add', this.renderIndividual)
    // Come back and research 'reset' action.
    this.listenTo(this.collection, 'reset', this.render);
  },

  renderIndividual: function(Individual){
    console.log("renderIndividual")
    var view = new app.IndividualView({model: Individual});
    $('.show-user').append(view.render().el);

  },

  render: function(){
    console.log("render")
    this.collection.each(function(Individual){
      this.renderIndividual(Individual)
    }, this)
  },

  simple: function(event){
    event.preventDefault();

    console.log("simple function");
  },

  addTag: function(event){
    event.preventDefault();
    var data = {};
    // console.log("inside add tag");

    $('form').children().each(function(index, input){
      var $input = $(input);
      console.log($input)
      if (input.type === 'submit') {
        console.log("In addTag");
        return true;

      }
      if ($input.val() !== ''){
        data[input.name] = $input.val();
        data
      }
    });
      this.collection.create(data);
    }
});

