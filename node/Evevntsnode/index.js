const pizzaShop=require('./pizzaShop')
const drinkOffer=require('./drink')

const shop1=new pizzaShop()
const shop2=new drinkOffer()

shop1.on('order',(size,toppings)=>{
    console.log(`order pizza ${size} ${toppings}`);
    shop2.offer(size)
})
shop1.display_order()
shop1.order('s','cheese')
