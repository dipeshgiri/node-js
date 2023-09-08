const express=require('express');
const app=express();
const people=require('./routes/people');
const auth=require('./routes/auth');
app.use(express.static('./navbar-app'));

app.use('/api/people',people );
app.use('/login',auth);


app.listen(500,()=>{
    console.log("server running on port 500");
})





//app.use(express.urlencoded({extended:true}))





// const logger=require('./logger-middleware');
// const authorize=require('./authorize');
// const morgan=require('morgan')
// //req=>middleware=>res
// // const {data}=require('./data');

// //user defined
// //app.use([logger,authorize])

// //express
// // app.use(express.static('./public'))

// //third party
// app.use(morgan('tiny'))

// app.get('/',(req,res)=>{

//     res.send('home')
// })


// app.get('/about',(req,res)=>{
//     res.send('About')
// })

// app.get('/api/products',(req,res)=>{
//     console.log(req.user);
//     res.send('Products')
// })

// app.get('/api/items',(req,res)=>{
//     res.send('Items')
// })


// app.listen(500,()=>{
//     console.log("Server is listening on port 500...")
// })


// app.get('/',(req,res)=>{
//     res.send(`<h1>Home Page</h1> <a href="/api/products">products</a>`)
// })

// app.get('/api/products',(req,res)=>{
//     const newdata=data.map((singledata)=>{
//         const{name,language,id}=singledata;
//         return {name,language,id};
//     })
//     res.json(newdata)
// })

// app.get('/api/products/:userId',(req,res)=>{
//     const {userId}=req.params;
//     const singledata=data.find((sidata)=>sidata.id===userId)
//     if(singledata==null){
//         res.status(404).send("Data not found")
//     }
//     else{
//     res.json(singledata)
//     }
// })

// app.get('/api/v1/query',(req,res)=>{
//     const {search,limit}=req.query
//     let sortedProducts=[...data]

//     if(search){
//         sortedProducts=sortedProducts.filter((product)=>{
//             return product.name.startsWith(search)
//         })
//     }
//     if(limit){
//         sortedProducts=sortedProducts.slice(0,Number(limit))
//     }

//     if(sortedProducts.length<1){
//         return res.status(200).json({success:true,data:[]});
//     }
//     return res.status(200).json(sortedProducts)
// })


// app.listen(5500,()=>{
//     console.log("Server is listnening on port 5500")
// })