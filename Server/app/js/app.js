'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {
            redirectTo: '/main'});

        $routeProvider.when('/main', {
            templateUrl: '/app/partials/main.html',
            controller: 'MainCtrl'});
        
        $routeProvider.when('/paymentForm', {
            templateUrl: '/app/partials/paymentForm.html',
            controller: 'paymentFormCtrl'});
        

        $routeProvider.otherwise({
            redirectTo: '/main'});
    }]);

