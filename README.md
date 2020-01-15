# Sam App API

App to manage Sammy's life.

## Prerequisites

Install all node packages via yarn:

`yarn add`

### Twilio

Install twilio cli:

`npm install twilio-cli -g`

Login into twilio cli:

`twilio cli`

Submit a shorthand identifier (ssamkough), and input account SID and authorization token found in [Twilio console](https://www.twilio.com/console).

To run ngrok server that creates webhook:

`twilio phone-numbers:update "+[from-number]" --sms-url="http://localhost:8000/api/sms"`

## Resources

- [Programmable SMS Quickstart for Node.js](https://www.twilio.com/docs/sms/quickstart/node)
- [Dev Ed - Build A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial](https://www.youtube.com/watch?v=vjf774RKrLc)
