import csv from "papaparse";
import fs from "fs";
import path from "path";

import User from "../../models/User";
import Block from "../../models/Block";

export default async (req, res, next) => {
  console.log("test");
  const pathString = `${__dirname}/../../models`;
  const totalFiles = fs.readdirSync(pathString).length;

  fs.readdirSync(pathString, (err, files) => {
    files.forEach((file, index) => {
      console.log(index + file);
    });
  });

  //  const block = await new Block({
  //     name: req.body.name
  //   });

  //   await block.save();

  //   const user = await new User({
  //     first_name: req.body.first_name,
  //     last_name: req.body.last_name,
  //     email: req.body.email,
  //     birth_date: req.body.birth_date,
  //     about_me: req.body.about_me,
  //     profile_image_url: req.body.profile_image_url,
  //     job_title: req.body.job_title,
  //     company: req.body.company
  //   });

  //   await user.save();
};
