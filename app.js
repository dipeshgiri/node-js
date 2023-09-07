const express=require('express');
const app=express();

const {data}=require('./data');


app.get('/',(req,res)=>{
    res.send(`<h1>Home Page</h1> <a href="/api/products">products</a>`)
})

app.get('/api/products',(req,res)=>{
    const newdata=data.map((singledata)=>{
        const{name,language,id}=singledata;
        return {name,language,id};
    })
    res.json(newdata)
})

app.get('/api/products/:userId',(req,res)=>{
    const {userId}=req.params;
    const singledata=data.find((sidata)=>sidata.id===userId)
    if(singledata==null){
        res.status(404).send("Data not found")
    }
    else{
    res.json(singledata)
    }
})

app.get('/api/v1/query',(req,res)=>{
    const {search,limit}=req.query
    let sortedProducts=[...data]

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }

    if(sortedProducts.length<1){
        return res.status(200).json({success:true,data:[]});
    }
    return res.status(200).json(sortedProducts)
})


app.listen(5500,()=>{
    console.log("Server is listnening on port 5500")
})