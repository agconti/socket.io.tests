'use strict'

var expect = require('chai').expect
  , server = require('./utils/server')
  , io = require('socket.io/node_modules/socket.io-client')
  , ioOptions = require('./fixtures/io').ioOptions
  , testMsg = require('./fixtures/io').testMsg
  , sender
  , receiver



describe('Chat Events', function(){
  beforeEach(function(done){
    
    // start the io server
    server.start()
    // connect two io clients
    sender = io('http://localhost:3000/', ioOptions)
    receiver = io('http://localhost:3000/', ioOptions)
    
    // finish beforeEach setup
    done()
  })
  afterEach(function(done){
    server.stop(done)  
  })

  describe('Message Events', function(){
    it('Clients should receive a message when the `message` event is emited.', function(done){
      sender.emit('message', testMsg)
      receiver.on('message', function(msg){
        setTimeout(function(){   
          console.log(2)
          expect(msg).to.equal(testMsg)
          done()
        }, 2000)
      })
    })
  })
})