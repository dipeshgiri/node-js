const {readFile, writeFile}=require('fs').promises
// const getPath=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject (err);
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getPath('./content/first.txt').then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })


const start=async()=>{
    try{
        const first=await readFile('./content/first.txt');
        const second=await writeFile('./content/heelo.txt',`This is awesome: ${first}`,{flag:'a'})
    }catch(error){
        console.log(error)
    }
}

start();