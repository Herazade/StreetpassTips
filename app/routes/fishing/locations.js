import Ember from 'ember';
import db from 'web/data/fishing-db';

export default Ember.Route.extend({
	model (){
		// Link All Data

		// Add all fish in a Map
		var fishMap = {};
		Ember.$.each(db.fishes, function(){
			fishMap[this.code]=this;
		});
		
		var modelData = {
			"islands" : []
		};

		Ember.$.each(db.islands, function(){
			var island = this;
			island.nbFish = 0;
			Ember.$.each(island.spots, function(){
				var spot = this;
				spot.fish = [];
				Ember.$.each(spot.fishCode, function(){
					var fishCode = this;
					spot.fish.push(fishMap[fishCode]);
				});
				spot.nbFish = spot.fish.length;
				island.nbFish += spot.nbFish;
			});
			modelData.islands.push(island);
		});


		Ember.Logger.debug("MODEL", modelData);

		return Ember.RSVP.hash(modelData);
	}
});
