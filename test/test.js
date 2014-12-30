'use strict'

var expect = require('chai').expect
  , io = require('socket.io/node_modules/socket.io-client')
  ,ioOptions = { 
      transports: ['websocket']
    , forceNew: true
    , reconnection: false
  }
  , testMsg = 'HelloWorld'
  , sender
  , receiver



describe('Chat Events', function(){
  beforeEach(function(done){
    
    // start the io server
    var server = require('../index.js').server

    // connect two io clients
    sender = io('http://localhost:3000/', ioOptions)
    receiver = io('http://localhost:3000/', ioOptions)
    
    // finish beforeEach setup
    done()
  })
  afterEach(function(done){
    
    // disconnect io clients after each test
    sender.disconnect()
    receiver.disconnect()
    done()
  })

  describe('Message Events', function(){
    it('Clients should receive a message when the `message` event is emited.', function(done){
      sender.emit('message', testMsg)
      receiver.on('message', function(msg){
        expect(msg).to.equal(testMsg)
        done()
      })
    })
  })
})