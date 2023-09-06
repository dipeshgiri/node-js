const http=require('http')
const server=http.createServer((req,res)=>{
    console.log("Request event");
    res.end("Hello World");
})
server.listen(5500,()=>{
    console.log("server listening on port 5500...")
})