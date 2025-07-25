const fs = require('fs')
const path = require('path')

/* Syntax of Asynchoronous fs module 

 fs.writeFile(file, data, [option], callback)

*/

const filePath = path.join(__dirname, 'file.txt')

fs.writeFileSync(filePath, 'Learning Fs Module async',  'utf-8',(err)=> {
  if(err) throw err;
  console.log('file created (async)');
});


// fs.readFile()

fs.readFile(filePath, 'utf-8', (err, data)=> {
if(err) throw err;
console.log('file content:', data)
})

// fs.append()

fs.appendFile(filePath,  '\nAppend update successfully', 'utf-8', (err) => {
 if(err) throw err;
 console.log("Naya Content file mein jod diya gaya.");
})

// fs.unlink 

fs.unlink(filePath, () => {
  if(err) throw err;
  console.log('File delete successfully.')
})