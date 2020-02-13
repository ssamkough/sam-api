# Sam App API 🔆

App to manage Sammy's life.

## Prerequisites 📋

Install all node packages via yarn:

`yarn`

## Technologies 🤖

### Firebase 🔥

Followed [Cloud Firestore quickstart](https://firebase.google.com/docs/firestore/quickstart). Some things to note:

- Switched from firestore mode to native mode
- Enabled Cloud Firestore API
- Set environment variable _GOOGLE_APPLICATION_CREDENTIALS_ to file path of the JSON file in `./database`

### Google Cloud ☁️

#### App Engine 🏭

Utilized App Engine to build my application to the internet. Followed this [handy dandy guide](https://cloud.google.com/appengine/docs/standard/nodejs/building-app/). Here are some of the steps summed up for what I needed to do:

1. [Created a Cloud project](https://cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project) with an App Engine app.
2. Installed [Google Cloud SDK](https://cloud.google.com/sdk/docs/) locally.
3. After I wrote my `app.yaml` file, I deployed it by running `gcloud app deploy`. To view my app after deploying it I ran `gcloud app browse`. For testing purposes I kept doing this manually until I had my app set up.
4. To view logs I opened my [Logs Viewer](https://cloud.google.com/appengine/docs/standard/nodejs/building-app/viewing-service-logs) in the cloud console as well checked the Source.

#### Other

- Setup a [Cloud Build](https://cloud.google.com/run/docs/continuous-deployment-with-cloud-build) trigger, which " _automatically starts a build whenever you make any changes to your source code_". I have it pointing straight to this repo, so whenever I push any changes, it redeploys the app.
- For the token I pass, I initially had underscores like so: `SAM_API_TOKEN`. It was working when I was testing locally, but Google Cloud removes any headers with underscores, so I changed it to dashes instead.
- Also [mapped a custom subdomain](https://cloud.google.com/appengine/docs/standard/python/mapping-custom-domains) ([api.sammysamkough.com](api.sammysamkough.com)) to point to instead of the default Google Cloud url.

### Twilio 📱

Install twilio cli:

`npm install twilio-cli -g`

Login into twilio cli:

`twilio cli`

Submit a shorthand identifier (ssamkough), and input account SID and authorization token found in [Twilio console](https://www.twilio.com/console).

To run ngrok server that creates webhook:

`twilio phone-numbers:update "+[from-number]" --sms-url="http://localhost:8000/api/sms"`

## Resources 👏

- [Programmable SMS Quickstart for Node.js](https://www.twilio.com/docs/sms/quickstart/node)
- [Dev Ed - Build A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial](https://www.youtube.com/watch?v=vjf774RKrLc)
