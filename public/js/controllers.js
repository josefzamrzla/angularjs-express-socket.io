(function(angular, $){
    'use strict';

    angular.module('realtimeApp').controller('DefaultCtrl', function($scope, socket) {

        $scope.socketConnected = false;
        var sock = socket('http://localhost:8888');

        sock.on('pong', function (data) {
            $scope.socketConnected = true;
        });

        $(function() {
            sock.emit('ping', {});
        });

    });

})(window.angular, window.jQuery);