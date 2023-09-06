const {createReadStream}=require('fs');

const stream=createReadStream('./scontent/big.txt',{highWaterMark:90000,encoding:'utf-8'});

stream.on('error',(errr)=>{
    console.log(errr)
}) 