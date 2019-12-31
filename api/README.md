# Sam App API

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