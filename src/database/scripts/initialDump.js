import Papa from "papaparse";
import fs from "fs";
import bcrypt from "bcryptjs";
import admin from "firebase-admin";

export const initialDump = async () => {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: "service_account",
      project_id: process.env.FB_PROJECT_ID,
      private_key_id: process.env.FB_PRIVATE_KEY_ID,
      private_key: process.env.FB_PRIVATE_KEY.replace(/\\n/g, "\n"),
      client_email: process.env.FB_CLIENT_EMAIL,
      client_id: process.env.FB_CLIENT_ID,
      auth_uri: process.env.FB_AUTH_URI,
      token_uri: process.env.FB_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FB_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.FB_CLIENT_X509_CERT_URL,
    }),
    databaseURL: process.env.FB_DATABASE_URL,
  });

  const db = admin.firestore();

  const pathString = `${__dirname}/../../assets/data`;
  const files = fs.readdirSync(pathString);

  let hashedPwd;
  try {
    const salt = bcrypt.genSaltSync(10);
    hashedPwd = bcrypt.hashSync(process.env.USER_PWD, salt);
  } catch (err) {
    console.log(err);
  }

  files.forEach((file) => {
    console.log("Importing " + file + "...");
    const url = pathString + "/" + file;
    const rsFile = fs.createReadStream(url);

    Papa.parse(rsFile, {
      header: true,
      step: (results) => {
        if (file == "blocks.csv") {
          let data = {
            name: results.data.name,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
          };

          try {
            db.collection("blocks")
              .doc(results.data.name)
              .set(data);
          } catch (err) {
            console.log(err);
          }
        } else if (file == "users.csv") {
          let data = {
            uuid: results.data.uuid,
            first_name: results.data.first_name,
            last_name: results.data.last_name,
            email: results.data.email,
            birth_date: results.data.birth_date,
            tagline: results.data.tagline,
            profile_image_url: results.data.profile_image_url,
            job_title: results.data.job_title,
            company: results.data.company,
            about_me: results.data.about_me,
            password: hashedPwd,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
          };

          try {
            db.collection("users")
              .doc(process.env.FB_USER_UUID)
              .set(data);
          } catch (err) {
            console.log(err);
          }
        }
      },
      complete: () => {
        console.log("Finished importing " + file + "!");
      },
    });
  });
};
