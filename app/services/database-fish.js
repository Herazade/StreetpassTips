import Ember from 'ember';

export default Ember.Service.extend({
	store: Ember.inject.service(),

	lastVersion: "1.0.0",

	init() {
		Ember.Logger.debug("Initialise Fishing Database");
		var store = this.get('store');

		// FIXME : We should only load DB if not already in local storage
		this.loadDatabase();

		// Check version and reload DB if needed
		store.queryRecord('version', { filter: { module:"fishing"} }).then(
			function(storedVersion){
				Ember.Logger.debug("Current Stored Version :", storedVersion.get('version'));
				Ember.Logger.debug("Last Version :", this.get('lastVersion'));
				if(storedVersion.get('version') != this.get('lastVersion')){
					Ember.Logger.debug("We need to reload the DB");
					if(storedVersion.get('version') != undefined){
						storedVersion.deleteRecord();	
					}
					this.loadDatabase();
				}else{
					Ember.Logger.debug("DB up to date");
				}
			}.bind(this)
		);	
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
		Ember.Logger.debug('Import Fish Database sources');	
		this.loadJsonDb('bait');
		this.loadJsonDb('fish');
		this.loadJsonDb('island');
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

			// Save Records in Store
			this.get('store').peekAll('fishing/fish').save();
			this.get('store').peekAll('fishing/island').save();

			Ember.Logger.debug('-- Import DONE --');
			store.createRecord('version', {module:"fishing", version:this.get('lastVersion')}).save();
		}
	}.observes('bait', 'fish', 'island'),

	getAllFish(){
		return this.get('store').findAll('fishing/fish');
	},

	getAllIslands(){
		return this.get('store').findAll('fishing/island');
	},
});
