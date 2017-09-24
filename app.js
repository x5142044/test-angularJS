(function () {
    'use strict';
    angular.module('myFirstApp', [])
    .controller('MyFirstController', function ($scope) {
        $scope.name = "jason";
        $scope.sayHello = function () {
            return "hello, jason.";
        };

    });

})(); //IIFE
