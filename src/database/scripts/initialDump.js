import Papa from "papaparse";
import fs from "fs";
import bcrypt from "bcryptjs";
import admin from "firebase-admin";

import serviceAccount from "./../service-account-file.json";

export default async () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sam-api-267023.firebaseio.com"
  });

  const db = admin.firestore();

  const pathString = `${__dirname}/../../assets/data`;
  const files = fs.readdirSync(pathString);

  let hashedPwd;
  try {
    const salt = bcrypt.genSaltSync(10);
    hashedPwd = bcrypt.hashSync(`${process.env.USER_PWD}`, salt);
  } catch (err) {
    console.log(err);
  }

  files.forEach(file => {
    console.log("Importing " + file + "...");
    const url = pathString + "/" + file;
    const rsFile = fs.createReadStream(url);

    Papa.parse(rsFile, {
      header: true,
      step: results => {
        if (file == "blocks.csv") {
          let data = {
            name: results.data.name,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
          };

          db.collection("blocks")
            .doc(results.data.name)
            .set(data);
        } else if (file == "users.csv") {
          let data = {
            first_name: results.data.first_name,
            last_name: results.data.last_name,
            email: results.data.email,
            birth_date: results.data.birth_date,
            about_me: results.data.about_me,
            profile_image_url: results.data.profile_image_url,
            job_title: results.data.job_title,
            company: results.data.company,
            password: hashedPwd,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
          };

          db.collection("users")
            .doc("sam")
            .set(data);
        }
      },
      complete: () => {
        console.log("Finished importing " + file + "!");
      }
    });
  });
};
