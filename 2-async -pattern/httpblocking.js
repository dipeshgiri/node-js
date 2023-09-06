const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.end('Home page');
    }
    if(req.url === '/about'){
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('ABOUT PAGE')
    }
    else{
    res.end('Error Page');
    }
});

server.listen(5500,()=>{
    console.log("Server is listnening on port 5500...")
})