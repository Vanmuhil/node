const EventEmitter =require('node:events')
const event = new EventEmitter()

event.on('order-pizza',(size,toppings)=>{
    console.log(`pizza is ordered ${size} ${toppings}`)
})
event.on('order-pizza',(size)=>{if(size==="large"){
    console.log('free drink')}
})
event.emit('order-pizza','large','cheese')
