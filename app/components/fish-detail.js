import Ember from 'ember';

export default Ember.Component.extend({
	willRender () {
		var fish = this.get('fish');
		
		var baits = {};
		Ember.$.each(fish.bait.split(""), function(){
			baits[this]=true;
		});

		fish.baits = baits;
		//Ember.set(fish, "baits", baits);

		Ember.Logger.debug(fish);
	}
});
