import Ember from 'ember';

export default Ember.Controller.extend({
	databaseFish: Ember.inject.service("database-fish"),

	init: function() {
    	// Load database
    	var db = this.get('databaseFish');
    	this.set('islands', db.getAllIslands());
  	}
});
