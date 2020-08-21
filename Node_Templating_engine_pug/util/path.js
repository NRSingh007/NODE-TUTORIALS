const path = require("path");

// "dirname" returns the directory of the path
// "process", global variable which is available in all files
// "mainModule" property, refers to the start of application
module.exports = path.dirname(process.mainModule.filename);
