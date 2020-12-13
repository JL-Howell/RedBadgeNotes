// CUPCAKE SHOP EXAMPLE
/**
 * Class Cupcake is a blueprint that stores a number of variables that are guaranteed for each cupcake that will be made.
 * This class takes in 3 arguments: batter, icing, and cost.
 * 
 */
class Cupcake {
    constructor(batter, icing, cost) {
      this.batter = batter;
      this.icing = icing;
      this.cost = cost;
    }
  ​
    getDescription() {
      return `A $${this.cost} ${this.batter} cupcake with ${this.icing} on top!`;
    }
  }
  ​
  class CupcakeShop {
    constructor(location) {
      this.location = location;
      this.inventory = [];
      this.cash = 0;
      this.totalSold = 0;
    }
  ​
    addToInventory(cupcake) {
      this.inventory.push(cupcake);
    }
  ​
    bakeBatch(batter, icing, pricePerCupcake, count) {
      for (let i = 0; i < count; i++) {
        let newCupcake = new Cupcake(batter, icing, pricePerCupcake);
        this.addToInventory(newCupcake);
      }
    }
  ​
    getStatus() {
      console.log(this.inventory);
      return `The shop currently has $${this.cash} in the till, ${this.inventory.length} cupcakes in the inventory, and has sold ${this.totalSold} cupcakes!`;
    }
  ​
    // sells a single cupcake (last from the inventory array)
    sellCupcake() {
      if (this.inventory.length > 0) {
        let toSell = this.inventory.pop();
        this.cash = this.cash + toSell.cost; // this.cash += toSell.cost
        return toSell;
      } else {
        return "No cupcakes to sell!";
      }
    }
  ​
    // sell cupcake that matches a customer's preference of batter, icing, and numberOfCupcakes
    sellCupcakes(batter, icing, numberOfCupcakes) {
      let cupcakeTypeInventory = this.getCupcakes(batter, icing);
      if (cupcakeTypeInventory.length >= numberOfCupcakes) {
        this.cupcakeTransaction(cupcakeTypeInventory, numberOfCupcakes);
      } else {
        return "There are not enough cupcakes of that variety in the inventory. Please choose another.";
      }
    }
  ​
    cupcakeTransaction(cupcakeTypeInventory, numberOfCupcakes) {
      for (let i = 0; i < numberOfCupcakes; i++) {
        console.log(cupcakeTypeInventory[i]);
        let startingIndex = this.inventory.indexOf(cupcakeTypeInventory[i]);
        this.inventory.splice(startingIndex, 1);
      }
      this.calcaluteSubtotal(numberOfCupcakes, cupcakeTypeInventory[0].cost);
      return (this.totalSold += numberOfCupcakes);
    }
  ​
    calcaluteSubtotal(count, cost) {
      return (this.cash += count * cost);
    }
  ​
    // Returns an array of cupcakes based on customer's preference. Returns an empty array if preferences don't meet test.
    getCupcakes(batter, icing) {
      if (this.inventory.length > 0) {
        let cupcakesAvailable = this.inventory.filter(
          (cupcake) => batter === cupcake.batter && icing === cupcake.icing
        );
        return cupcakesAvailable;
      } else {
        return "No cupcakes in inventory.";
      }
    }
  }
  ​
  let cakeBakeShop = new CupcakeShop("New Orleans");
  ​
  cakeBakeShop.bakeBatch("Chocolate", "Chocolate", 1.49, 4);
  console.log(cakeBakeShop.getStatus());
  ​
  cakeBakeShop.bakeBatch("Chocolate", "Vanilla", 2.75, 13);
  console.log(cakeBakeShop.getStatus());
  ​
  cakeBakeShop.bakeBatch("Red Velvet", "Cream Cheese", 3.25, 8);
  console.log(cakeBakeShop.getStatus());
  ​
  cakeBakeShop.bakeBatch("Chocolate", "Chocolate", 1.49, 4);
  console.log(cakeBakeShop.getStatus());
  ​
  cakeBakeShop.sellCupcakes("Chocolate", "Vanilla", 3);
  console.log(cakeBakeShop.getStatus());
  ​
  cakeBakeShop.sellCupcakes("Red Velvet", "Cream Cheese", 2);
  console.log(cakeBakeShop.getStatus());
  ​
  cakeBakeShop.sellCupcakes("Chocolate", "Chocolate", 5);
  console.log(cakeBakeShop.getStatus());
  