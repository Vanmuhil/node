const fs = require('node:fs')
const readstream=fs.createReadStream('./file1.txt',{encoding:'utf-8'})
const writestream=fs.createWriteStream('./file4.txt')
// readstream.on("data",(chunk)=>{
//  writestream.write(chunk)})
// readstream.pipe(writestream)
