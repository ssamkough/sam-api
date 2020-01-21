import Papa from "papaparse";
import fs from "fs";

import Block from "../../models/Block";
import User from "../../models/User";

export default async => {
  const pathString = `${__dirname}/../../assets/models`;
  const files = fs.readdirSync(pathString);
  
  files.forEach((file, index) => {
    console.log("Importing " + file + "...");
    const url = pathString + "/" + file;
    const rsFile = fs.createReadStream(url);
    Papa.parse(rsFile, {
      header: true,
      step: (results) => {
        if (file == 'blocks.csv') {
           const block = await new Block({
              name: results.data.name
            });
            await block.save();
        } else if (file == 'users.csv') {
            const user = await new User({
              first_name: results.data.first_name,
              last_name: results.data.last_name,
              email: results.data.email,
              birth_date: results.data.birth_date,
              about_me: results.data.about_me,
              profile_image_url: results.data.profile_image_url,
              job_title: results.data.job_title,
              company: results.data.company
            });
            await user.save();
        }
      },
      complete: (results) => {
        console.log("Finished importing " + file + "!")
      }
    });
  });
};