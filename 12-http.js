const http= require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to our home page");
    }
    if(req.url==='/about'){
        res.end("here is about page");
    }
    res.end(`<h1>Opps!</h1>
    
    <p>Wwe cannot find your page</p1>
    <a href="/"> Back</a>`)
})

server.listen(5500)