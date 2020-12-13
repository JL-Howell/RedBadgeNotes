interface IPastry {
  type: string;
  cost: number;
  calories: number;

}

interface ICupCake extends IPastry { //this is the blueprint for the ICupCake interface
    batter: string;
    icing: string;

    getDescription(): string;
}


class Pastry implements IPastry {
	type: string;
	cost: number;
	calories: number;
	
	constructor(type: string, cost: number, calories: number) {
		this.type = type;
		this.cost = cost;
		this.calories = calories;
	}
	
}

interface ICookie extends IPastry {
	dough: string;
	mixIns: Array<string>;
}

class Cookie extends Pastry implements ICookie {
	dough: string;
	mixIns: string[];
	
	constructor(dough: string, mixIns: string[], cost: number, calories: number) {
		super('cookie', cost, calories);
		this.dough = dough;
		this.mixIns = mixIns;
	}
}


class Cupcake extends Pastry implements ICupCake{
    batter: string;
    icing: string;
    // cost: number;
    // type: string;
	// calories: number;
	//inheriting everything through the extension

    constructor(batter: string, icing: string, cost: number, calories: number) {
		super('cupcake', cost, calories) //similar to new Pastry(...)<-- pass in data there.
      	this.batter = batter;
      	this.icing = icing;
      	// this.cost = cost;
      	// this.calories = calories;
		  // this.type = 'cupcake';
		  //we can now delete these three because we added them into super.
    }

    getDescription() {
      return `A $${this.cost} ${this.batter} cupcake with ${this.icing} on top!`
    }
  }

  let CookieDough = new Cupcake('cookie dough', 'vanilla', 2.75, 300);

  console.log(CookieDough); //Cupcake { batter: 'cookie dough', icing: 'vanilla', cost: 2.75 }
  console.log(CookieDough.getDescription()); //A $2.75 cookie dough cupcake with vanilla on top!
  
  
  class CupcakeShop {
      //TYPE DECLARATION
    location: string;
    inventory: Array<ICupCake>;  //ICupCake[] which is utilizing the blueprint interface from above
    cash: number;

    //method that runs upon initializatoin and has these key properties 
    constructor(location: string) {
      this.location = location;
      this.inventory = [];
      this.cash = 0;
    }
    
    //method that adds cupcakes matching the ICupCake interface to the inventory
    addToInventory(cupcake: ICupCake) {
      this.inventory.push(cupcake);
    }

    //method that bakes instances of new CupCake with 4 params
    bakeBatch(batter: string, icing: string, pricePerCupcake: number, count: number) {
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

interface IPastryShop {
	inventory: IPastry[];
	location: string;
	cash: number;

	addToInventory(pastry: IPastry): void;
	getStatus(): string;
	bakeBatch(count: number, type: string, cost: number, calories: number): void; //void means that bakeBatch does not return anything. 
}

class NewCupcakeShop implements IPastryShop {
	location: string;
	inventory: ICupCake[]; 
	cash: number;

	constructor(location) {
		this.location = location;
		this.inventory = [];
		this.cash = 0;
	}

	getStatus() {
		return ``
	}

	addToInventory(cupcake: ICupCake) {

	}

	bakeBatch() {
		
	}
}



//interfaces make blueprints
//If we use class cupcake it's fine because it falls under the interface ICupCake 
//You'll never pass in an ICupCake into the method. You'll pass something that implements ICupCake, like a cupcake class instance or something similar
//Array<ICupCake> - Your state will initially be an empty array. assigning a type that will be an array with objects inside of it. 
//interfaces and class components are supposed to make our lives easier