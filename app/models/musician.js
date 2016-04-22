import Ember from 'ember';

export default Ember.Object.extend({
	id: null,
	firstName: null,
	lastName: null,
	bandName: null,

	fullName: Ember.computed('firstName', 'lastName', function() {
		return `${this.get('firstName')} ${this.get('lastName')}`;
	})
  
});
