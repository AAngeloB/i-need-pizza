/*
* Create a variable for each order with the order number as the name of the variable.
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects ex.(pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/

Customer Name: James Franko
Address: 2155 E Lake Dr
City: Seattle
State: WA
Zip Code: 11310
Pizza:
  Crust: thin
  Pizza Sauce: robust marinara
  Cheese: regular
  Toppings:
    Veggies: olives, green peppers
    Meats: pepperoni, ham, sausage
Side Items: breadsticks, bbq wings 6 piece
Sauces: ranch
Special Instructions: please cut into squares
Payment Type: cash
Store Id: 112



Customer Name: Justin Bieber
Address: 1801 W Rodeo Dr
City: Beverly Hills
State: CA
Zip Code: 91833
Pizza:
  Crust: stuffed crust
  Pizza Sauce: creamy garlic alfredo
  Cheese: double
  Toppings:
    Veggies: onion, anchovies, mushrooms
    Meats: chicken, bacon
Side Items: double fudge brownie dessert
Sauces: bbq, garlic sauce
Special Instructions: call 815 at the gate
Payment Type: credit card
Store Id: 382

/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/


/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/


var currentOrders = {
order11821 = {
	customername : "James Franko",
	address : "2155 E Lake Dr",
	city : "Seattle",
	State : "WA",
	ZipCode : 11310
	}

pizza:
	Crust: "thin",
	PizzaSauce: "robust marinara",
	Cheese: "regular"
}


toppings:{
    Veggies: ["olives, green peppers"],
    meats: ["pepperoni, ham, sausage"]
}

SideItems: {["breadsticks", "bbq wings 6 piece"],
Sauces: "ranch",
SpecialInstructions: "please cut into squares",
PaymentType: "cash",
StoreId: 112
}
};
 console.log(currentOrders.customername)


Customer Name: "Justin Bieber",
	Address: "1801 W Rodeo Dr",
	City: "Beverly Hills",
	State: "CA",
	ZipCode: 91833
Pizza:
  	Crust: "stuffed crust",
  	PizzaSauce: "creamy garlic alfredo",
  	Cheese: "double"

Toppings:
    Veggies: ["onion, anchovies, mushrooms"],
    Meats: ["chicken, bacon"],
SideItems: "double fudge brownie dessert",
Sauces: ["bbq, garlic sauce"],
SpecialInstructions: "call 815 at the gate",
PaymentType: "credit card",
StoreId: 382