
//Pizza function:
function Pizza(topping, pizzaSize, quantity) {
  this.topping = topping;
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
};


//Calcuate price: start with base price, modify based on selections made:
Pizza.prototype.calculatePrice = function() {
  var basePrice = 10;
  var toppingType = this.topping;
  var toppingArray = ["Pepperoni", "BBQ Chicken", "Veggie", "Vegan", "Garlic special", "Hawaiian", ];
  var specialToppingArray = ["Meat Lovers", "Pizza Especial"];
 
 //using an array of toppings, add additional cost based on topping selection to access the two arrays of differing prices: 
if (toppingArray.indexOf(toppingType) != -1) {
    var toppingPrice = basePrice + 5;
  } else if (specialToppingArray.indexOf(toppingType) != -1) {
    var toppingPrice = basePrice + 8;
  } 
  else {
    var toppingPrice = basePrice;
  }

//Adjust price based on size selection:
if (this.pizzaSize == "Large") {
  var sizePrice = toppingPrice + 10;
} else if (this.pizzaSize == "Medium") {
  var sizePrice = toppingPrice +5;
} else {
  var sizePrice = toppingPrice;
}

//Adjust the price based on the quantity selected, and create a limit:
if (this.quantity < 5000 && this.quantity > 0) {
  var PizzaPrice = "$" + this.quantity * sizePrice;
} else if (this.quantity >= 5000) {
  var PizzaPrice = "Whoa man, our little pizza shop can't make that many! Our kitchen is WAY too small!!!";
} else {
  PizzaPrice = "Hold on bro, we can't make negative pizzas!";
}

return PizzaPrice;

}

//link the form to the JavaScript to creat price:
$(document).ready(function() {

  $("form#pizza-selection").submit(function(event) {
    event.preventDefault();


    var inputtedTopping = $("#topping").val();
    var inputtedPizzaSize = $("#pizzaSize").val();
    var inputtedQuantity = parseInt($("input#quantity").val());


    var newPizza = new Pizza(inputtedTopping, inputtedPizzaSize, inputtedQuantity);
    var PizzaPrice = newPizza.calculatePrice();

    $(".price").text(PizzaPrice);

  });

});