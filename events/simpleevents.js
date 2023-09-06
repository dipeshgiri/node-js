const EventEmitter=require('events')


const customEmmiter=new EventEmitter()

customEmmiter.on('response',(name,id)=>{
    console.log(`Data Received Name: ${name} with ID: ${id}`,)
})

customEmmiter.on('response',()=>{
    console.log(`Some other data Received `)
})

// customEmmiter.emit('response','Dipesh',321)