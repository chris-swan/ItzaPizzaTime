
//Pizza function:
function Pizza(topping, pizzaSize, quantity, flirt) {
  this.topping = topping;
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
  this.flirt = flirt;
};

//Calcuate price: start with base price, modify based on selections made:
Pizza.prototype.calculatePrice = function() {
  var basePrice = 10;
  var toppingType = this.topping;
  var toppingArray = ["Pepperoni", "BBQ Chicken", "Veggie", "Vegan", "Garlic special", "Hawaiian", ];
  var specialToppingArray = ["Meat Lovers", "Pizza Especial"];
  var flirtResult = Math.random();
 
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
      var sizePrice = toppingPrice + 5;
    } else {
      var sizePrice = toppingPrice;
    }

  //Adjust the price based on the quantity selected, and create a limit:
  if (this.quantity < 5000 && this.quantity > 0) {
      var pizzaPrice = this.quantity * sizePrice;
    } else if (this.quantity >= 5000) {
      return "Whoa man, our little pizza shop can't make that many! Our kitchen is WAY too small!!!";
    } else {
      return "Hold on bro, we can't make negative pizzas!";
    }

//Option to flirt to gamble a lower or higher price:
 if (this.flirt == "no") {
       var finalPrice = "Your total price is going to be $" + pizzaPrice;
    } else if (this.flirt == "yes" && .5 < flirtResult) {
      var badFlirt = pizzaPrice * 1.5 ;
      var finalPrice = "Flirting didn't go too well, better leave a good tip (Better tip 50%..it was bad...) $" + badFlirt;
    } else {
      var goodFlirt = pizzaPrice * .5;
      var finalPrice = "Flirting worked!!! It saved you 50%! You have to pay $" + goodFlirt;
  }

return finalPrice;

}

//link the form to the JavaScript to creat price:
$(document).ready(function() {

  $("form#pizza-selection").submit(function(event) {
    event.preventDefault();


    var inputtedTopping = $("#topping").val();
    var inputtedPizzaSize = $("#pizzaSize").val();
    var inputtedQuantity = parseInt($("input#quantity").val());
    var inputtedFlirt = $("#flirt").val();


    var newPizza = new Pizza(inputtedTopping, inputtedPizzaSize, inputtedQuantity, inputtedFlirt);
    var finalPrice = newPizza.calculatePrice();

    $(".price").text(finalPrice);

  });
});