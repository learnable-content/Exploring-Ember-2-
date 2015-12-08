import Ember from 'ember';

export default Ember.Controller.extend({
	showList: false,
	actions: {
		show: function() {
			this.set('showList', true)
		},
		hide: function() {
			this.set('showList', false)
		},
	},
    people: [{
        name: 'Jordan Houston',
        age: '5 April 1975',
        alias: 'Juicy J',
        hometown: 'Memphis, Tennessee'
    }, {
        name: 'Patrick Houston',
        age: '8 February 1973',
        alias: 'Project Pat',
        hometown: 'Memphis, Tennessee'
    }, {
        name: 'Paul Beauregard',
        age: '12 January 1975',
        alias: 'DJ Paul',
        hometown: 'Memphis, Tennessee'
    }]
});