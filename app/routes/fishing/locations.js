import Ember from 'ember';

export default Ember.Route.extend({
	model (){
		// Model Todo

		var store = this.store;

		// Baits
		store.createRecord('fishing/bait', {id:"BK", color: "black", shape: "larva"});
		store.createRecord('fishing/bait', {id:"Wh", color: "white", shape: "crab"});
		store.createRecord('fishing/bait', {id:"BW", color: "brown", shape: "beetle"});
		store.createRecord('fishing/bait', {id:"Pi", color: "pink", shape: "seashell"});
		store.createRecord('fishing/bait', {id:"PU", color: "purple", shape: "starfish"});
		store.createRecord('fishing/bait', {id:"LB", color: "light blue", shape: "sardine"});
		store.createRecord('fishing/bait', {id:"BU", color: "blue", shape: "fossil"});
		store.createRecord('fishing/bait', {id:"LG", color: "light green", shape: "water flea"});
		store.createRecord('fishing/bait', {id:"GR", color: "green", shape: "seaweed"});
		store.createRecord('fishing/bait', {id:"Or", color: "orange", shape: "roe"});
		store.createRecord('fishing/bait', {id:"YE", color: "yellow", shape: "shrimp"});
		store.createRecord('fishing/bait', {id:"Rd", color: "red", shape: "worm"});

		// Fishs
		var newFish = {id:"SAR", baits:[]};
		var baits = ["Wh", "Pi", "LB", "LG", "Or", "Rd"];
		var whiteBait = store.peekRecord('fishing/bait', "Wh");
		newFish.baits.push(whiteBait);
		var pinkBait = store.peekRecord('fishing/bait', "Pi");
		newFish.baits.push(pinkBait);
		store.createRecord('fishing/fish', newFish);
		

	}
});
