import Papa from "papaparse";
import fs from "fs";
import bcrypt from "bcrpytjs";
import mongoose from "mongoose";

import db from "./database/config";
import Block from "../../models/Block";
import User from "../../models/User";

export default async () => {
  mongoose.connect(
    db.db_string,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB!");
    }
  );
  
  const pathString = `${__dirname}/../../assets/models`;
  const files = fs.readdirSync(pathString);
  
  for (const file in files)
    console.log("Importing " + file + "...");
    const url = pathString + "/" + file;
    const rsFile = fs.createReadStream(url);

    Papa.parse(rsFile, {
      header: true,
      step: (results) => {
        if (file == 'blocks.csv') {
          // const block = await new Block({
          //   name: results.body.name
          // });
          // await block.save();
        } else if (file == 'users.csv') {
            const salt = await bcrypt.genSalt(10);
            const hashedPwd = await bcrypt.hash(process.env.USER_PWD, salt);

            // const user = await new User({
            //   first_name: results.data.first_name,
            //   last_name: results.data.last_name,
            //   email: results.data.email,
            //   birth_date: results.data.birth_date,
            //   about_me: results.data.about_me,
            //   profile_image_url: results.data.profile_image_url,
            //   job_title: results.data.job_title,
            //   company: results.data.company,
            //   password: hashedPwd
            // });
            // await user.save();
        }
      },
      complete: (results) => {
        console.log("Finished importing " + file + "!")
      }
    });
  };
};