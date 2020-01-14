const MessagingResponse = require('twilio').twiml.MessagingResponse;

const response = async (req, res, next) => {
    const message = req.body.Body.toLowerCase();
    const twiml = new MessagingResponse();
    const keywords = ['note'];
    
    if (message.includes('note', 0)) {
        twiml.message('Oi!');
    } else {
        twiml.message('Twilio here!');
    }

    
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
};

export default response;