import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FrontendENV.locationType
});

Router.map(function() {
  this.route('application');
  this.route('protected');
  this.route('login');
});

export default Router;
