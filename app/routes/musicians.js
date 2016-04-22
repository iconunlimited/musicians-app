import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		const  musiciansService = this.get('musiciansService');
		return musiciansService.getMusiciansWithBands();
	},
	musiciansService: Ember.inject.service('musicians')
});