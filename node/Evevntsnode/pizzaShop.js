const EventEmitter=require('node:events')
class pizzaShop extends EventEmitter{
    constructor(){
        super();
        this.order_no=0;
    }
    order(size,toppings){
        this.order_no++;
        this.emit('order',size,toppings)
    }
    display_order(){
        console.log(`currently display ${this.order_no}`)
    }
}
module.exports=pizzaShop