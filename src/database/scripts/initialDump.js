import csv from "papaparse";
import fs from "fs";
import path from "path";

const initialDump = (req, res, next) => {
    const currentDirectory = path.basename(path.dirname(filename));
    const path_string = currentDirectory + "/../models";
    console.log(path_string);
    fs.readdir(path_string, (error, files) => { 
        let totalFiles = files.length; 
        console.log(totalFiles); 
     });
};

export default initialDump;