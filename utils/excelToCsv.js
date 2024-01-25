const XLSX = require("xlsx");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const cleanedTexts = require("../functions/cleanTexts");

const XLSX_FILE_PATH = "../XLSX/ExcelTestSheet.xlsx";
const CSV_OUTPUT_PATH = "../CSV/test.csv";

const cleanText = (text) => {
  let cleanedText = text;
  cleanedText = cleanedTexts.replaceQuotes(cleanedText);
  cleanedText = cleanedTexts.removeUrls(cleanedText);
  cleanedText = cleanedTexts.removeTargetContent(cleanedText);
  cleanedText = cleanedTexts.removeHtmlAndSpecialChars(cleanedText);
  cleanedText = cleanedTexts.removeBackslashesAndQuotes(cleanedText);
  return cleanedText;
};

const workbook = XLSX.readFile(XLSX_FILE_PATH);
const sheet_name_list = workbook.SheetNames;
const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

xlData.forEach((row) => {
  Object.keys(row).forEach((key) => {
    if (typeof row[key] === "string") {
      row[key] = cleanText(row[key]);
    }
  });
});

const expectedHeaders = ["ID", "Nombre completo", "Correo electrónico"];

// In case you want to filter by a field that has a specific data.
//const filteredData = xlData.filter((row) => row[""] === "");

const csvWriter = createCsvWriter({
  path: CSV_OUTPUT_PATH,
  header: expectedHeaders.map((key) => ({ id: key, title: key })),
});

csvWriter
  // to change xlData to filteredData
  .writeRecords(xlData)
  .then(() => {
    console.log("CSV file created successfully.");
  })
  .catch((err) => console.error("Error writing CSV file.", err));
