require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const messageHandler = (error, req, res, next) => {
    client.messages
    .create({
       body: 'This is a twilio message.',
       from: `+${process.env.TWILIO_FROM_NUMBER}`,
       to: `+${process.env.TWILIO_TO_NUMBER}`
     })
    .then(message => console.log(message.sid));
}

export default messageHandler;