var express = require('express')
  , app = express()
  , port = process.env.PORT || 3000
  , http = require('http').Server(app)
  , io = require('socket.io')(http)

io.on('connection', function(socket){
  socket.on('message', function(msg){
    io.sockets.emit('message', msg)
  })
})

// export the server so it can be easily called for testing
exports.server = http.listen(port)
exports.io = io