const fs = require('fs');
const path = require('path')

const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName)

/* const writeFile = fs.writeFileSync(
   filePath,
  "This is the initial Data, updated",
  'utf-8'
);

console.log(writeFile) */

/* 
fs.writeFileSync('file.txt', 'Hello World');
console.log('file created (sync)'); */

fs.appendFileSync(
  filePath,
  `\nNew login at 10:00 AM`,
  'utf-8'
)
console.log('Content Update Successfully');
