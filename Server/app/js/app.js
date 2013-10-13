'use strict';

var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {
            redirectTo: '/register'});

        $routeProvider.when('/main', {
            templateUrl: '/app/partials/main.html',
            controller: 'mainCtrl'});

        $routeProvider.when('/driver_input', {
            templateUrl: '/app/partials/driver_input.html',
            controller: 'driver_inputCtrl'});

        $routeProvider.when('/driver_output', {
            templateUrl: '/app/partials/driver_output.html',
            controller: 'driver_outputCtrl'});

        $routeProvider.when('/passenger_input', {
            templateUrl: '/app/partials/passenger_input.html',
            controller: 'passenger_inputCtrl'})

        $routeProvider.when('/passenger_output', {
            templateUrl: '/app/partials/passenger_output.html',
            controller: 'passenger_outputCtrl'})

        $routeProvider.when('/register', {
            templateUrl: '/app/partials/register.html',
            controller: 'registerCtrl'})

        $routeProvider.otherwise({
            redirectTo: '/main'});
    }]);
