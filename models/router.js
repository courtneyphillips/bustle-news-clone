Bustle.Router.map(function(){
  this.resource('stories', {path: '/'});
  this.resource('story', {path: '/:story_id'});
});
