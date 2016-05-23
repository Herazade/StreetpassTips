import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	color: attr('string'),
	shape: attr('string')
});