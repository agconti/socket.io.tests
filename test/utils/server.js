var app = require('../../app').server
  , port = process.env.PORT
  , server
  , eio
  , io

/**
 * A utility for starting the server for testing
 * @param {function} callback
 */
exports.start = function(callback){
    
  // start the io server
  io = require('../../app').io
  eio = io.engine
  server = app.listen(port)

  if (callback){
    callback(null, io)
  }

}

/**
 * A utility for stoping the server for testing
 * @param {function} callback
 */
exports.stop = function(callback){
  
  // close the io server when complete
  eio.close()
  // server.close()
  
  if (callback){
    callback(null)
  }
}

exports.io = io
exports.eio = eio

