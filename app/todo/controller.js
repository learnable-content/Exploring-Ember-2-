import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createTodo: function() {
            var newTodo = this.store.createRecord('todo', {
                name: this.get('name'),
                createdAt: new Date().getTime()
            });
            newTodo.save();
        }
    }
});