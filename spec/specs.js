describe('Pizza', function() {
  it("Retrieves pizza size, topping selection and quantity", function() {
    var testPizza = new Pizza("Large", "BBQ chicken", 2);
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.topping).to.equal("BBQ chicken");
    expect(testPizza.quantity).to.equal(2);
  });

});