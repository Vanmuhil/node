const http=require('node:http')
const json ={
    "name":"adam",
    "age":25,
    "location":"coimbatore"
}
const server =http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":application/json})
    res.end(JSON.stringify(json))

}).listen(3001,()=>{
    
}
)