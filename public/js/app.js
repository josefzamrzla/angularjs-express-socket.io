'use strict';

var app = angular.module('newApp', ['Socket']);
app.config(function($routeProvider) {
    $routeProvider.
        when('/default', {
            controller: 'DefaultCtrl',
            templateUrl: 'templates/default.html'}
        ).
        otherwise({redirectTo:'/default'});
});
