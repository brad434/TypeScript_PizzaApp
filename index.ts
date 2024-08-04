const menu = [
  { name: "Cheese", price: 6 },
  { name: "Pepperoni", price: 4 },
  { name: "Mushroom", price: 9 },
  { name: "Salad", price: 3 },
];

let cashInRegister = 100;
const nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizaObj) {
  menu.push(pizaObj);
}

function placeOrder(pizzaName) {
  const pizza = menu.find(pizza => pizza.name === pizzaName);
  cashInRegister += pizza.price;
  orderQueue.push(newOrder);
  const newOrder = { id: nextOrderId++, pizza: pizza, status: "ordered" };
}

function completeOrder(orderId) {
  const order = orderQueue.find(order => order.id === orderId);
  order.status = "completed";
  return order;
}

addNewPizza({ name: "pineapple", cost: 12 });
addNewPizza({ name: "Bbq Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 12 });

placeOrder("Chicken Bacon Ranch");
completeOrder("1");

console.log("Menu:", menu);
console.log("Cash in Register:", cashInRegister);
console.log("Order queue:", orderQueue);
