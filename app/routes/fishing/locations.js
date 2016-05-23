import Ember from 'ember';

export default Ember.Route.extend({
	model (){
		// Model Todo

		var store = this.store;

		// Baits
		store.createRecord('bait', {id:"BK", color: "black", shape: "larva"});
		store.createRecord('bait', {id:"Wh", color: "white", shape: "crab"});
		store.createRecord('bait', {id:"BW", color: "brown", shape: "beetle"});
		store.createRecord('bait', {id:"Pi", color: "pink", shape: "seashell"});
		store.createRecord('bait', {id:"PU", color: "purple", shape: "starfish"});
		store.createRecord('bait', {id:"LB", color: "light blue", shape: "sardine"});
		store.createRecord('bait', {id:"BU", color: "blue", shape: "fossil"});
		store.createRecord('bait', {id:"LG", color: "light green", shape: "water flea"});
		store.createRecord('bait', {id:"GR", color: "green", shape: "seaweed"});
		store.createRecord('bait', {id:"Or", color: "orange", shape: "roe"});
		store.createRecord('bait', {id:"YE", color: "yellow", shape: "shrimp"});
		store.createRecord('bait', {id:"Rd", color: "red", shape: "worm"});

		// Fishs
		var newFish = {id:"SAR", baits:[]};
		var baits = ["Wh", "Pi", "LB", "LG", "Or", "Rd"];
		var whiteBait = store.peekRecord('bait', "Wh");
		newFish.baits.push(whiteBait);
		var pinkBait = store.peekRecord('bait', "Pi");
		newFish.baits.push(pinkBait);
		store.createRecord('fish', newFish);
		

	}
});
