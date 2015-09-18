describe('Pizza', function() {
  it("Retrieves pizza size, topping selection and quantity", function() {
    var testPizza = new Pizza("BBQ chicken", "Large", 1);
    expect(testPizza.topping).to.equal("BBQ chicken");
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.quantity).to.equal(1);
  });
  //Test to assign base price from pizza.
it("assigns a price based on topping", function () {
    var testPizza = new Pizza("cheese", "Small", 1);
    expect(testPizza.calculatePrice()).to.equal(10);
  });

it("assigns a price based on topping", function () {
    var testPizza = new Pizza("Pepperoni", "Small", 1);
    expect(testPizza.calculatePrice()).to.equal(15);
  });
});