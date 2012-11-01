(function(app, $){
    'use strict';

    app.controller('DefaultCtrl', function($scope, socket) {

        $scope.socketConnected = false;
        var sock = socket('http://localhost:8888');

        sock.on('pong', function (data) {
            $scope.socketConnected = true;
        });

        $(function() {
            sock.emit('ping', {});
        });

    });

})(app, window.jQuery);