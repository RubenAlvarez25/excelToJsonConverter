const fs = require("fs");
const csv = require("csv-parser");

const CSV_FILE_PATH = "../CSV/test.csv";
const JSON_OUTPUTFILE_PATH = "../JSON/test.json";

const jsonArray = [];

fs.createReadStream(CSV_FILE_PATH)
  .pipe(csv())
  .on("data", (row) => {
    Object.keys(row).forEach((key) => {
      if (row[key].trim() === "") {
        row[key] = "EMPTY";
      }
    });

    jsonArray.push(row);
  })

  .on("end", () => {
    fs.writeFileSync(JSON_OUTPUTFILE_PATH, JSON.stringify(jsonArray, null, 2));
    console.log("JSON file created successfully.");
  });
