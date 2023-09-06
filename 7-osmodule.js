const os=require('os')
console.log(os.userInfo());

//methods return the system run time in setup
console.log(os.uptime())


const currentOs={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem() 
}

console.log(currentOs);