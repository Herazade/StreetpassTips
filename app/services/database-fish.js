import Ember from 'ember';

export default Ember.Service.extend({
	store: Ember.inject.service(),

	lastVersion: "1.0.0",

	bait: undefined,
	fish: undefined,

	init() {
		Ember.Logger.debug("Initialise Fishing Database");
		var store = this.get('store');

		this.loadDatabase();
	},

	loadJsonDb(entity){
		$.ajax({
			url: 'data/'+entity+'.json',
			success: function(data) {
				Ember.Logger.debug('Save data : ', entity);
				this.set(entity, data);
			}.bind(this),
		});		
	},

	loadDatabase() {
		Ember.Logger.debug('Import Fish Database');
		var store = this.get('store');
		
		this.loadJsonDb('bait');
		this.loadJsonDb('fish');
		this.loadJsonDb('island');

		// Done - Update Version
		store.createRecord('version', {module:"fishing", version:this.get('lastVersion')});
	},

	dataLoaded: function() {
		var store = this.get('store');

		// Wait fo All data to be loaded
		if(this.get('bait') !== undefined && this.get('fish') !== undefined && this.get('island') !== undefined){

			Ember.Logger.debug('Store Bait records');
			this.get('bait').forEach(function(bait){
				store.createRecord('fishing/bait', bait);
			}.bind(this));

			Ember.Logger.debug('Store Fish records');
			this.get('fish').forEach(function(fish){
				var baitsList = fish.baits;
				fish.baits = [];
				baitsList.forEach(function(baitCode){
					var bait = store.peekRecord('fishing/bait', baitCode);
					fish.baits.push(bait);
				});
				store.createRecord('fishing/fish', fish);
			}.bind(this));

			Ember.Logger.debug('Store Island records');
			this.get('island').forEach(function(island){
				store.createRecord('fishing/island', island);
			}.bind(this));

			Ember.Logger.debug('-- Import DONE --');
		}
	}.observes('bait', 'fish', 'island'),

	getAllFish(){
		return this.get('store').peekAll('fishing/fish');
	},

	getAllIslands(){
		return this.get('store').peekAll('fishing/island');
	},
});
