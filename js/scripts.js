function Pizza(topping, pizzaSize, quantity) {
  this.topping = topping;
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
};

Pizza.prototype.calculatePrice = function() {
  var basePrice = 10;
  var toppingType = this.topping;
  var toppingArray = ["Pepperoni", "BBQ Chicken", "Veggie", "Vegan"];
  
if (toppingArray.indexOf(toppingType) != -1) {
    var toppingPrice = basePrice + 3;
  } else {
    var toppingPrice = basePrice;
  }

  return toppingPrice;
}
