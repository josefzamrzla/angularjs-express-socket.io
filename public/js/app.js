(function(window) {
    'use strict';

    var app = window.angular.module('aesApp', ['Socket']);
    app.config(function($routeProvider) {
        $routeProvider.
            when('/default', {
                controller: 'DefaultCtrl',
                templateUrl: 'templates/default.html'}
            ).
            otherwise({redirectTo:'/default'});
    });

    window.aesApp = app;
})(window);
