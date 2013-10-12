'use strict';

var hasreloaded = false;

myApp.controller('registerCtrl', function($scope, $http, $location, $rootScope, route) {
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

        $location.url('/');
    };
});



