'use strict';

var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {
            redirectTo: '/register'})

        .when('/main', {
            templateUrl: '/app/partials/main.html',
            controller: 'mainCtrl'})

        .when('/driver_input', {
            templateUrl: '/app/partials/driver_input.html',
            controller: 'driver_inputCtrl'})

        .when('/driver_output', {
            templateUrl: '/app/partials/driver_output.html',
            controller: 'driver_outputCtrl'})

        .when('/passenger_input', {
            templateUrl: '/app/partials/passenger_input.html',
            controller: 'passenger_inputCtrl'})

        .when('/passenger_output', {
            templateUrl: '/app/partials/passenger_output.html',
            controller: 'passenger_outputCtrl'})

        .when('/register', {
            templateUrl: '/app/partials/register.html',
            controller: 'registerCtrl'})

        .when('/min_side', {
            templateUrl: '/app/partials/min_side.html',
            controller: 'min_sideCtrl'
            })

        .otherwise({
            redirectTo: '/main'});
    }]);
