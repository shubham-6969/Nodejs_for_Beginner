// Asynchronous Promises 
const fs = require('fs');
const path = require('path');

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

// const filePath1 = __dirname;

/* fs.promises
 .readdir(filePath1)
 .then((data)=> console.log(data))
 .catch((error)=> console.log(error)); */


 const readFolder = async () => {
    try {
    const data =  await fs.promises.readdir(filePath1);
    console.log(data);
    } catch (error) {
      console.log(error);
    }
 }

 readFolder();

 // CURD operation using async await
// syntax: fsPromises.writeFile(path, options);

// write file

const writeData = async () => {
   try {
      await fs.promises.writeFile(filePath, 'initial file addded', 'utf-8');
    console.log("Data successfully wirte");
   } catch (error) {
    console.log("Error while writing file", error)
   }
}

writeData();

// append data
const appendData = async () => {
  try {
    await fs.promises.appendFile(filePath, '\nInitial updated data', 'utf-8');
    console.log("Data Updated successfully");
  } catch (error) {
    console.log("Error while updating data", error)
  }
}

appendData();

// unlink  or delete file 

const deleteData = async () => {
  try {
    await fs.promises.unlink(filePath);
    console.log("file deleted successfully");
  } catch (error) {
    console.log("Error while deleting data", error)
  }
}

deleteData();