const fs=require('node:fs')
const datas =fs.readFileSync('./file1.txt','utf-8')
console.log(datas);
fs.readFile('./file1.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
    }
})