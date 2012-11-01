(function(angular, io){
    'use strict';

    var module = angular.module('Socket', []);

    module.factory('socket', function ($rootScope) {

        return function (host, details) {
            if (io) {
                var socket = io.connect(host, details);

                return {
                    on: function (eventName, callback) {
                        socket.on(eventName, function () {
                            var args = arguments;
                            $rootScope.$apply(function () {
                                callback.apply(socket, args);
                            });
                        });
                    },
                    emit: function (eventName, data, callback) {
                        socket.emit(eventName, data, function () {
                            var args = arguments;
                            $rootScope.$apply(function () {
                                if (callback) {
                                    callback.apply(socket, args);
                                }
                            });
                        });
                    }
                };
            } else {
                // noop failback
                return {on:function(){}, emit:function(){}};
            }
        };
    });
})(window.angular, window.io);