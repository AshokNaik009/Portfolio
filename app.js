var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'main.html',
           controller:'mainController'
    })
    .when('/about',{
         templateUrl:'test2.html'
        
    })
    .when('/second',{
         templateUrl:'second.html'
    })
    .when('/contact',{
         templateUrl:'contact.html' 
     }) 
});
myApp.controller('mainController', ['$scope', '$log', ,function($scope, $log,) {
    $scope.name = 'Ashok';
     $scope.tagline ='Be Humble'; 
 }]);


