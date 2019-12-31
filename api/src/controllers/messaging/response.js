const MessagingResponse = require('twilio').twiml.MessagingResponse;

const response = async (req, res, next) => {
    const twiml = new MessagingResponse();

    twiml.message('This is a Twilio Response!');
  
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
};

module.exports = response;