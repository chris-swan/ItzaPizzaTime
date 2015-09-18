describe('Pizza', function() {
  it("Retrieves pizza size, topping selection and quantity", function() {
    var testPizza = new Pizza("BBQ chicken", "Small", 1, "no");
    expect(testPizza.topping).to.equal("BBQ chicken");
    expect(testPizza.pizzaSize).to.equal("Small");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.flirt).to.equal("no");
  });
  //Test to assign base price from pizza.
it("assigns a base price based selecting base topping(no modifications)", function () {
    var testPizza = new Pizza("cheese", "Small", 1, "no");
    expect(testPizza.calculatePrice()).to.equal("Your total price is going to be $10");
  });

it("assigns a higher price based selecting a topping to modify price", function () {
    var testPizza = new Pizza("Pepperoni", "Small", 1, "no");
    expect(testPizza.calculatePrice()).to.equal("Your total price is going to be $15");
  });

it("assigns a higher price based selected Size(price based on topping & size)", function () {
    var testPizza = new Pizza("Pepperoni", "Medium", 1, "no");
    expect(testPizza.calculatePrice()).to.equal("Your total price is going to be $20");
  });

it("assigns a different price based selected additional size(Large pizza, one topping)", function () {
    var testPizza = new Pizza("Pepperoni", "Large", 1, "no");
    expect(testPizza.calculatePrice()).to.equal("Your total price is going to be $25");
  });

it("assigns a price based quantity(Topping, size and quantity)", function () {
    var testPizza = new Pizza("Pepperoni", "Large", 3, "no");
    expect(testPizza.calculatePrice()).to.equal("Your total price is going to be $75");
  });

it("assigns a new price based extra special price point(price based on topping, size and quantity)", function () {
    var testPizza = new Pizza("Meat Lovers", "Small", 1, "no");
    expect(testPizza.calculatePrice()).to.equal("Your total price is going to be $18");
  });
it("assigns a cap to be sure the pizza maker can meet demand", function () {
    var testPizza = new Pizza("Meat Lovers", "Small", 6000, "no");
    expect(testPizza.calculatePrice()).to.equal("Whoa man, our little pizza shop can't make that many! Our kitchen is WAY too small!!!");
  });

it("does not allow negative intergers to be ordered", function () {
    var testPizza = new Pizza("Meat Lovers", "Small", -5, "no");
    expect(testPizza.calculatePrice()).to.equal("Hold on bro, we can't make negative pizzas!");
  });

it("is not altered by result of selecting no to flirt ", function () {
    var testPizza = new Pizza("cheese", "Small", 1, "no");
    expect(testPizza.calculatePrice()).to.equal("Your total price is going to be $10");
  });

});