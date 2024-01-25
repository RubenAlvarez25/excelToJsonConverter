XLSX to CSV and CSV to JSON Converter

This script is designed to convert data from an XLSX file to a CSV file and then further convert that CSV file to a JSON file. Additionally, it includes text cleaning functions for specific fields in the XLSX data.

Installation:

1. Clone the Repository:
   git clone https://github.com/RubenAlvarez25/excelToJsonConverter
   cd your-repository

2. Install Dependencies:
   npm install

3. Run the Script:
   node script.js

Usage:

XLSX to CSV Conversion

The script reads data from an XLSX file located at ../XLSX/ExcelTestSheet.xlsx. It performs text cleaning on specific string fields such as removing quotes, URLs, HTML, and special characters. The cleaned data is then written to a CSV file located at ../CSV/test.csv.

CSV to JSON Conversion

After the CSV file is generated, the script reads it and converts each row to a JSON object. Any empty fields in the CSV are marked as "EMPTY." The resulting JSON array is written to a file located at ../JSON/test.json.

Text Cleaning

The cleanTexts module provides functions for cleaning specific text fields. These functions are applied to string values in the XLSX data.

Customization:

Field Filtering

If you want to filter data based on a specific field, you can uncomment and customize the filteredData variable.

Expected Headers

Modify the expectedHeaders array to match the headers in your XLSX file. This ensures the CSV file has the correct column headers.

Output:

After running the script, a CSV file (test.csv) and a JSON file (test.json) will be created in the respective ../CSV/ and ../JSON/ directories.

CSV file created successfully.
JSON file created successfully.

Feel free to customize the script based on your specific requirements and data structure. If you encounter any issues or have questions, please don't hesitate to reach out.

Note: Make sure you have Node.js and npm installed on your machine before running the script.
