(function(){
'use strict';
var x = "hello";

  angular.module('myFirstApp', []);

  .controller('MyFirstController', function($scope){
$scope.name = "jason";
$scope.sayHello = function(){
return "hello, jason.";
};

  });

})(); // ()();IIFE (search what it is)
