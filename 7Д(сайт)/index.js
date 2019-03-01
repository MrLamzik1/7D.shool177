var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


server.listen(3000);

app.get('/', function(request, respons) {
	respons.sendFile(__dirname + '/index.html');
}

users = [];
connection =[];

io.sockets.on('connection'. function(socket){
  connection.push();

  socket.on('disconnect', function(data)  {
    connections.splice(connections.indexOf(socket), 1);
    console.log("Успешное от соединение")
  }
});
