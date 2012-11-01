var http = require('http'),
    express = require('express'),
    app = express(),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

var api = require('./routes/api');

server.listen(8888);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

    next();
};

app.configure(function spyConfigure() {
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.methodOverride());
    app.use(allowCrossDomain);
    app.use(app.router);
});

io.sockets.on('connection', function (socket) {

    socket.on('ping', function (data) {
        socket.emit('pong', {foo: 'bar'});
    });

});


// JSON API

app.get('/api/foo', api.foo);

// redirect all others to the index (HTML5 history)
// app.get('*', routes.index);
