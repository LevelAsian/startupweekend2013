'use strict';

var client = new WindowsAzure.MobileServiceClient(
    "https://bartebil.azure-mobile.net/",
    "loEjfZcxsJBBwlCLmVZzRQPgawBWbF54"
);

angular.module('myApp.controllers', [])

    .controller('mainCtrl', function($scope, $http, $location, $rootScope, $route) {
    $scope.hei = "basdbasdbdadsa";

    $scope.goToPassenger_input = function(){
        $location.path("/passenger_input");
    }

    $scope.goToDriver_input = function(){
        $location.path("/driver_input");
    }

    })

    .controller('driver_inputCtrl', function($scope, $routeParams, $http, $rootScope, $route, $location) {


    })

    .controller('driver_outputCtrl', function($scope, $http, $location, $rootScope){

    })

    .controller('passenger_inputCtrl', function($scope, $http, $location, $rootScope){

    })

    .controller('passenger_outputCtrl', function($scope, $http, $location, $rootScope){

    })

    .controller('registerCtrl', function($scope, $http, $location, $rootScope){

        $scope.register = function() {
            var user = { customerFirstName: $scope.customerFirstName, customerLastName: $scope.customerLastName, customerEmail: $scope.customerEmail
            , customerPhoneNumber: $scope.customerPhoneNumber, customerPassword: $scope.customerPassword
            , creditCardNumber: $scope.creditCardNumber, cvv: $scope.cvv  };

            client.getTable("User").insert(user);

            $scope.customerFirstName = "";
            $scope.customerLastName = "";
            $scope.customerEmail = "";
            $scope.customerPhoneNumber = "";
            $scope.customerPassword = "";
            $scope.creditCardNumber = "";
            $scope.cvv = "";

            $location.path("/");
        }
        
    })