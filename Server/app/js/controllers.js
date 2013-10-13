'use strict';


angular.module('myApp.controllers', [])

    .controller('mainCtrl', function($scope, $http, $location, $rootScope, $route) {
    $scope.hei = "basdbasdbdadsa";

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

    })

    .controller('registerCtrl', function($scope, $http, $location, $rootScope, route) {
        $scope.register = function(customerFirstName, customerLastName, customerEmail,
                                   customerPassword, rewritePassword, customerPhoneNumber,
                                   creditCardNumber, cvv, expirationDate, postalCode ) {
            customer.firstname = customerFirstName;
            customer.lastname = customerLastName;
            customer.email = customerEmail;
            customer.password = customerPassword;
            customer.phone = customerPhoneNumber;
            customer.bankInfo.creditcardnumber = creditCardNumber;
            customer.bankInfo.cvv = cvv;
            customer.bankInfo.expirationdate = expirationDate;
            customer.bankInfo.postalcode = postalCode;

            $location.path('/');


        };
    });


