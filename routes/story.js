Bustle.PostRoute = Ember.Route.extend({
  model: function(params) {
    return stories.findBy('id', params.story_id);
  }
});
