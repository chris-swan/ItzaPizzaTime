describe('Pizza', function() {
  it("Retrieves pizza size, topping selection and quantity", function() {
    var testPizza = new Pizza("BBQ chicken", "Small", 1);
    expect(testPizza.topping).to.equal("BBQ chicken");
    expect(testPizza.pizzaSize).to.equal("Small");
    expect(testPizza.quantity).to.equal(1);
  });
  //Test to assign base price from pizza.
it("assigns a base price based selecting base topping(no modifications)", function () {
    var testPizza = new Pizza("cheese", "Small", 1);
    expect(testPizza.calculatePrice()).to.equal("$10");
  });

it("assigns a higher price based selected topping(modify base price based on topping)", function () {
    var testPizza = new Pizza("Pepperoni", "Small", 1);
    expect(testPizza.calculatePrice()).to.equal("$15");
  });

it("assigns a higher price based selected Size(price based on topping & size)", function () {
    var testPizza = new Pizza("Pepperoni", "Medium", 1);
    expect(testPizza.calculatePrice()).to.equal("$20");
  });

it("assigns a higher price based selected Size(price based on topping & size)", function () {
    var testPizza = new Pizza("Pepperoni", "Large", 1);
    expect(testPizza.calculatePrice()).to.equal("$25");
  });

it("assigns a higher price based quantity(price based on topping, size and quantity)", function () {
    var testPizza = new Pizza("Pepperoni", "Large", 3);
    expect(testPizza.calculatePrice()).to.equal("$75");
  });

it("assigns a higher price based extra special price(price based on topping, size and quantity)", function () {
    var testPizza = new Pizza("Meat Lovers", "Small", 1);
    expect(testPizza.calculatePrice()).to.equal("$18");
  });
it("assigns a cap to be sure the pizza maker can meet demand", function () {
    var testPizza = new Pizza("Meat Lovers", "Small", 6000);
    expect(testPizza.calculatePrice()).to.equal("Whoa man, our little pizza shop can't make that many! Our kitchen is WAY too small!!!");
  });

it("assigns does not allow negative intergers to be ordered", function () {
    var testPizza = new Pizza("Meat Lovers", "Small", -5);
    expect(testPizza.calculatePrice()).to.equal("Hold on bro, we can't make negative pizzas!");
  });

});