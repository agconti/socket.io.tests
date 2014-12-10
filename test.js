var expect = require('chai').expect
  , io = require('socket.io/node_modules/socket.io-client')
  , testMsg = 'HelloWorld'
  , sender
  , reciver



describe('Chat Events', function(){
  beforeEach(function(done){

    // start the server
    var server = require('./index.js').server
    sender = io('http://localhost:3000/')
    reciver = io('http://localhost:3000/')
    done()
  })
  afterEach(function(done){
    // disconnect clients  
    sender.disconnect()
    reciver.disconnect()
    done()
  })

  describe('Message Events', function(){
    it('Clients should receive a message when the `message` event is emited.', function(done){
      sender.emit('message', testMsg)
      reciver.on('message', function(msg){
        console.log(msg)
        expect(msg).to.equal(testMsg)
        done()
      })
    })
  })
})