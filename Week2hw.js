//Open the new homework directory in VS Code and create a new JavaScript file - name it something that indicates it is homework for Week 2
//Inside your JS file, create two variables: pizzaPlace and numberOfToppings
//Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.

let pizzaPlace = "BertanBerties";
let numberOfToppings = 10

//Print the variables and their types

console.log(pizzaPlace);
console.log(numberOfToppings);
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.

let pizzaPlacegreeting = `"${pizzaPlace} offers ${numberOfToppings} toppings."`;
console.log(pizzaPlacegreeting);

//Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.

if (numberOfToppings < 10) {console.log("Quality, not quantity.")

} else { console.log("A whole lot of pizza.")

};

//Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)

for (let numberOfToppingss =0; numberOfToppingss <=10; numberOfToppingss += 2){console.log(numberOfToppingss);
}

