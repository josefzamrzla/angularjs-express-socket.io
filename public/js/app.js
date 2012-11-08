(function(angular) {
    'use strict';

    var app = angular.module('realtimeApp', ['Socket']);
    app.config(function($routeProvider) {
        $routeProvider.
            when('/default', {
                controller: 'DefaultCtrl',
                templateUrl: 'templates/default.html'}
            ).
            otherwise({redirectTo:'/default'});
    });
})(window.angular);
