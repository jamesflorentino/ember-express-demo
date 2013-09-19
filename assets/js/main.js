//= require ../bower_components/jquery/jquery.min.js
//= require ../bower_components/handlebars/handlebars.js
//= require ../bower_components/ember/ember.prod.js

var App = Ember.Application.create();

App.Router.map(function() {
    this.route('about');
    this.resource('contact', function() {
        this.route('form');
    });
});

App.ContactFormRoute = Ember.Route.extend({
    setupController: function() {
        console.log('test');
    }
});

App.ContactFormController = Ember.Controller.extend({
    submitData: function() {
        alert('thanks!');
    }
});
