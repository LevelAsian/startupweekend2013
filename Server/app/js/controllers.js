'use strict';

var client = new WindowsAzure.MobileServiceClient(
    "https://bartebil.azure-mobile.net/",
    "loEjfZcxsJBBwlCLmVZzRQPgawBWbF54"
);
var loggedInUser;

angular.module('myApp.controllers', [])

    .controller('mainCtrl', function($scope, $http, $location, $rootScope, $route) {
    $scope.hei = "basdbasdbdadsa";

    $scope.goToPassenger_input = function(){
        $location.path("passenger_input");
    }

    $scope.goToDriver_input = function(){
        $location.path("driver_input");
    }

    })

    .controller('driver_inputCtrl', function($scope, $routeParams, $http, $rootScope, $route, $location) {
    $scope.fylkerselected = []

    $scope.fylker = [
        {name:'Akershus'},
        {name:'Østfold'},
        {name:'Oslo'},
        {name:'Hedmark'},
        {name:'Oppland'},
        {name:'Buskerud'},
        {name:'Vestfold'},
        {name:'Telemark'},
        {name:'Aust-Agder'},
        {name:'Vest-Agder'},
        {name:'Rogaland'},
        {name:'Hordaland'},
        {name:'Sogn og Fjordane'},
        {name:'Møre og Romsdal'},
        {name:'Sør-Trøndelag'},
        {name:'Nord-Trøndelag'},
        {name:'Nordland'},
        {name:'Troms'},
        {name:'Finnmark'}
    ];

    $scope.addFylke = function(fylke){
        if($scope.fylkerselected.indexOf(fylke) == -1){
            $scope.fylkerselected.push(fylke)
        }
    }

    // Ting til å bytte farger på knapper
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
                        loggedInUser = User[i];
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

