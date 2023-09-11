// Create an array of pizzaToppings with at least four different toppings
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
const pizzaToppings = ['ham', 'cheese', 'pineapples',  '&','chicken'];
//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
function greetCustomer() {
 let greeting =  " Welcome to BertanBertie's our toppings are:";
for (let topping of pizzaToppings) {
  greeting += `${topping}`;
}
console.log(greeting);
}
// Create a getPizzaOrder function
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
  const order = `One ${size} ${crust} crust pizza with ${toppings} coming right up!`;
  console.log(order);
return [size,crust,toppings];
}
// Create a preparePizza function
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."

function preparePizza([size,crust,toppings]) {
  console.log('..preparing your pizza..');
  const pizza = {
    size: size,
    crust: crust,
    toppings: toppings,
  };
  return pizza;

}


// Create a servePizza function
//has a parameter of a pizza Object
//logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in

function servePizza(pizza) {
  console.log(`Orders ready! Here's your: ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}. Enjoy!`);
}

//Call each function and (starting with preparePizza) use the returned value from the previous function as its input
greetCustomer();
servePizza(preparePizza(getPizzaOrder('small','thincrust','ham','pineapple')));



//Add, commit, and push your JS file to your GitHub repo.
//Send your TA a link to your GitHub Homework repo when finished.
//An example output for this assignment is:
//Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers, One large thin crust pizza with sausage, onions, peppers, . Coming up! ...your pizza is cooking... Order up! Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!


