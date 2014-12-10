var express = require('express')
  , app = express()
  , http = require('http').Server(app)
  , io = require('socket.io')(http)

app.use(express.static(__dirname))

app.get('/', function(req, res){
  res.sendFile('./index.html')
})


io.on('connection', function(socket){
  console.log("Connected")
  socket.on('message', function(msg){
    io.sockets.emit('message', msg)
  })
})

io.sockets.on('message', function(msg){ console.log(msg)})

exports.server = http.listen(3000, function(){
  console.log('listening on *:3000')
})