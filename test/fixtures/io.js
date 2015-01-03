// fixtures and configuration for client side socket.io interactions

exports.ioOptions = { 
      transports: ['websocket']
    , forceNew: true
    , reconnection: false
  }

exports.testMsg = 'HelloWorld'