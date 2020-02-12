import admin from "firebase-admin";
import serviceAccount from "./../database/service-account-file.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-api-9a206.firebaseio.com"
});

const db = admin.firestore();

export default db;
