import csv from "csvtojson";
import fs from "fs";

const readable = fs.createReadStream("task2/csv/csv.csv");
const writtable = fs.createWriteStream("file.txt");

readable.pipe(csv()).pipe(writtable);
