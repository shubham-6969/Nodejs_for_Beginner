// Fs Promises Synchronous 

const fs = require('fs');
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);


// const filename = __dirname;

/* fs.promises
 .readdir(filename)
 .then((data) => console.log(data))
 .catch((err) => console.log(err)); */

 // Systax : fs.promises.writeFile(path, data, options).then().catch();

 /* 
     * path: path to the file.
     * data: Content to write.
     * options: Encoding (utf-8), flags, etc. (optional).
 */

fs.promises.writeFile(filePath, 'this is the initial data', 'utf-8')
 .then(()=> console.log('txt file created succesfully', ))
 .catch((err) => console.log(err))

 // read data

 fs.promises
  .readFile(filePath, 'utf-8')
  .then((data)=> console.log(data))
  .catch((err)=> console.log(err));

// appendfile 

fs.promises
  .appendFile(filePath, "\nthis is the updated data", 'utf-8')
  .then(console.log('file updated successfully'))
  .catch((err)=> console.log("error in updating file", err));

  // delete file

fs.promises
  .unlink(filePath)
  .then(console.log('file Deleted successfully'))
  .catch((err)=> console.log("error while deleting", err));

/* 
    * Are you tired of using fs.promises everytime?
    * You can actually just import with fs/promises
    * const fs.requires(fs/promises)
    * Now, you don't need to use fs.promises everytime
*/