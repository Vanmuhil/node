const fs = require('node:fs')
fs.writeFileSync('./file2.txt','hai jp')
fs.writeFile('./file2.txt','hai jp',{flag:"a"},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('sucess');
    }
})