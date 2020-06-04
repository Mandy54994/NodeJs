let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'customer-data.csv'; 
let fileOutputName = 'myOutputFile.json';
 
csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName);
