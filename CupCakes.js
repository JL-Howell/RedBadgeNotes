class Cupcake {
    constructor(batter, icing, cost) {
      this.batter = batter;
      this.icing = icing;
      this.cost = cost;
    }
    getDescription() {
      return `A $${this.cost} ${this.batter} cupcake with ${this.icing} on top!`
    }
  }
  let CookieDough = new Cupcake('cookie dough', 'vanilla', 2.75);
  console.log(CookieDough); //Cupcake { batter: 'cookie dough', icing: 'vanilla', cost: 2.75 }
  console.log(CookieDough.getDescription()); //A $2.75 cookie dough cupcake with vanilla on top!
  class CupcakeShop {
    constructor(location) {
      this.location = location;
      this.inventory = [];
      this.cash = 0;
    }
    
    addToInventory(cupcake) {
      this.inventory.push(cupcake);
    }
    bakeBatch(batter, icing, pricePerCupcake, count) {
      for (let i = 0; i < count; i++) {
        let newCupcake = new Cupcake(batter, icing, pricePerCupcake);
        this.addToInventory(newCupcake);
      }
    }
    getStatus() {
      return `The shop currently has $${this.cash} in the till and ${this.inventory.length} cupcakes in the inventory.`
    }
    // sell a single cupcake as the last item from the array
    sellCupcake() {
      if (this.inventory.length > 0) {
        let soldCupcake = this.inventory.pop();
        this.cash = this.cash + soldCupcake.cost;
        // this.cash += soldCupcake.cost;
        return soldCupcake;
      } else {
        return "No cupcakes to sell!"
      }
    }
  }
  let flyingCupCake = new CupcakeShop("Chicago");
  console.log(flyingCupCake);
  flyingCupCake.bakeBatch("Chocolate", "Vanilla", 1.49, 13);
  console.log(flyingCupCake.getStatus());
  flyingCupCake.sellCupcake();
  console.log(flyingCupCake.getStatus())