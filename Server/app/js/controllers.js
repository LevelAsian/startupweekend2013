'use strict';

var client = new WindowsAzure.MobileServiceClient(
    "https://bartebil.azure-mobile.net/",
    "loEjfZcxsJBBwlCLmVZzRQPgawBWbF54"
);

angular.module('myApp.controllers', [])

    .controller('mainCtrl', function($scope, $http, $location, $rootScope, $route) {
    $scope.hei = "basdbasdbdadsa";

    $scope.goToPassenger_input = function(){
        $location.path("/map.html");
    }

    $scope.goToDriver_output = function(){
        $location.path("/driver_output");
    }

    })

    .controller('driver_inputCtrl', function($scope, $routeParams, $http, $rootScope, $route, $location) {

    $scope.friends = [
        {name:'John', age:25, gender:'boy'},
        {name:'Jessie', age:30, gender:'girl'},
        {name:'Johanna', age:28, gender:'girl'},
        {name:'Joy', age:15, gender:'girl'},
        {name:'Mary', age:28, gender:'girl'},
        {name:'Peter', age:95, gender:'boy'},
        {name:'Sebastian', age:50, gender:'boy'},
        {name:'Erika', age:27, gender:'girl'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Samantha', age:60, gender:'girl'}
    ]

    $scope.currentclass = "driver_inputtomorrowbutton";
    $scope.currentclass2 = "driver_inputtodaybutton";

    $scope.changeclass1 = function(){
        if($scope.currentclass == "driver_inputtomorrowbutton"){
            $scope.currentclass = "driver_inputtomorrowbutton2";
        }else{
            $scope.currentclass = "driver_inputtomorrowbutton";
        }
    }

    $scope.changeclass2 = function(){
        if($scope.currentclass2 == "driver_inputtodaybutton"){
            $scope.currentclass2 = "driver_inputtodaybutton2";
        }else{
            $scope.currentclass2 = "driver_inputtodaybutton";
        }
    }


    })

    .controller('driver_outputCtrl', function($scope, $http, $location, $rootScope){

    })

    .controller('passenger_inputCtrl', function($scope, $http, $location, $rootScope){

    })

    .controller('passenger_outputCtrl', function($scope, $http, $location, $rootScope){

    })

    .controller('registerCtrl', function($scope, $http, $location, $rootScope){
        var User;
        client.getTable("User").read().done(function (results) {
            User = results;
        });

        $scope.login = function() {
            for (var i = 0; i < User.length; i++) {
                if($scope.loginemail == User[i].customerEmail){
                    if($scope.loginpassword == User[i].customerPassword){
                        $location.path("/main");
                    }else{
                        $scope.tekst="Incorrect password";
                    }
                }else{
                    $scope.tekst="No user with that email";
                }
            };
        }

        $scope.register = function() {

            var user = { customerFirstName: $scope.customerFirstName, customerLastName: $scope.customerLastName, customerEmail: $scope.customerEmail
            , customerPhoneNumber: $scope.customerPhoneNumber, customerPassword: $scope.customerPassword};

            client.getTable("User").insert(user);

            $location.path("/main");
        }



        
    })

