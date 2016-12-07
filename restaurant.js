function FoodItem(name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = false;
	this.glutenFree = false;
	this.citrusFree = false;
}

function Drink(name, description, price){
	this.name = name;
	this.description = description;
	this.price = price;
};

function Plate(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	// ingredients is an array
};

function Order(plates, drinks){
	this.plates = plates;
	this.drinks = drinks;
	// orderInfo is an array of Plate plates
};

function Menu(plates){
	this.plates = plates;
};

function Restaurant(name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;
};

function Customer(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
};

FoodItem.prototype.stringify = function(){
	return  this.name + ", " + 
		    this.calories + " Calories, " + "Vegan: " + 
		    this.vegan + ", " + "Has gluten: " + 
		    this.glutenFree + ", " + "Has citrus: " +
		    this.citrusFree + ".";
};

Plate.prototype.stringify = function(){
	return  this.name + ": " +
			this.description + ", Price: $" +
			this.price + ", Ingredients: " +
			this.ingredients + ".";
};

Drink.prototype.stringify = function(){
	return  this.name + ": " +
			this.description + ", Price: $" +
			this.price + ".";
};

Order.prototype.mealOrder = function(){
	return this.plates + " " + this.drinks;
};

Menu.prototype.stringify = function(){
	console.log("Menu:");
	for(var i = 0; i < this.plates.length; i++){
		console.log(this.plates[i].stringify());
	}
};

// Food Items
var chicken = new FoodItem("Chicken", 432, false, true, true);
var burger  = new FoodItem("Burger", 600, false, true, false);
var turkey  = new FoodItem("Turkey", 300, false, true, true);
var kale    = new FoodItem("Kale", 100, true, true, true);
var pizza   = new FoodItem("Pizza", 1000, false, false, true);
var orange  = new FoodItem("Orange", 60, true, true, false);
var chips   = new FoodItem("Chips", 200, true, false, true);

// Drinks
var horchata 	= new Drink("Horchata", "A milky drink made from ground almonds.", 2.99);
var pepsi 		= new Drink("Pepsi", "Carbonated soft drink.", 1.99);
var milk 		= new Drink("Milk", "Local farm milk.", 1.99);
var orangeJuice = new Drink("Orange Juice", "Fresh squeezed Florida juice.", 1.99);
var lemonade    = new Drink("Lemonade", "lemonade", 1.99);
var tea 		= new Drink("Tea", "Assortmant of hot teas to choose from.", 1.49);
var water		= new Drink("Water", "Filtered water.", 0.00);

// Plates
var spaghettiPlate 		= new Plate("Spaghetti", "Noodles doused in tomato sauce and veggies!", 8.99, ["noodles", " tomatoes", " mushrooms", " olive oil"]);
var pepperoniPizzaPlate = new Plate("Pepperoni Pizza", "Hand tossed italian dough covered in tomato sauce, fresh mozzerlla and pepperoni!", 9.99, ["dough", " tomato sauce", " pepperoni", " mozzerlla"]);
var cheeseburgerPlate 	= new Plate("Cheeseburger", "Grass-fed beef, slice of american cheddar, and your choice of tomato, lettuce, pickles, ketchup and onions served on a fluffy bun. Your side choice of fries or onion rings.", 11.99, ["grass-fed beef", " bun", " american cheese"]);
var tacoPlate		  	= new Plate("Tacos", "Loaded beef tacos.", 7.99, ["hard-shell tacos", "shredded-beef", "lettuce", "tomatoes", "sour cream", "grated cheese"]);

var plateArray = [spaghettiPlate, pepperoniPizzaPlate, cheeseburgerPlate, tacoPlate];

// Orders
var order1 = new Order(spaghettiPlate.stringify(), horchata.stringify());

var menu = new Menu(plateArray);
menu.stringify();


// print out food item Chicken into a string.
// console.log(chicken.stringify());
// print out the spaghetti plate to a string.
// console.log(spaghettiPlate.stringify());
// console.log(pepperoniPizzaPlate.stringify());
// console.log(cheeseburgerPlate.stringify());
// console.log(tacoPlate.stringify());
// console.log(horchata.stringify());
// console.log(order1.mealOrder());
//console.log(Menu.plateArray);








