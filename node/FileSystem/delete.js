const fs = require('node:fs')
fs.unlink('./file2.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('deleted sucess');
    }
})