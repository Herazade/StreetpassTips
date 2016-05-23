import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	module: attr('string'),
	version: attr('string')
});