function Pizza(topping, pizzaSize, quantity) {
  this.topping = topping;
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
};

Pizza.prototype.calculatePrice = function() {
  var basePrice = 10;
  var toppingType = this.topping;
  var toppingArray = ["Pepperoni", "BBQ Chicken", "Veggie", "Vegan", "Garlic special", "Hawaiian", "Meat Lovers", "Pizza Especial"];
  
if (toppingArray.indexOf(toppingType) != -1) {
    var toppingPrice = basePrice + 5;
  } else {
    var toppingPrice = basePrice;
  }

if (this.pizzaSize == "Large") {
  var sizePrice = toppingPrice + 10;
} else if (this.pizzaSize == "Medium") {
  var sizePrice = toppingPrice +5;
} else {
  var sizePrice = toppingPrice;
}

var PizzaPrice = this.quantity * sizePrice;

return PizzaPrice;

}

$(document).ready(function() {

  $("form#pizza-selection").submit(function(event) {
    event.preventDefault();


    var inputtedTopping = $("#topping").val();
    var inputtedPizzaSize = $("#pizzaSize").val();
    var inputtedQuantity = parseInt($("input#quantity").val());


    var newPizza = new Pizza(inputtedTopping, inputtedPizzaSize, inputtedQuantity);
    var PizzaPrice = newPizza.calculatePrice();

    $(".price").text("$" + PizzaPrice);


});

});