// add water
// add coffee beans
// grind it
// brewing
//
// coffeeType,size, isHot,
class CoffeeMachine {
  constructor(coffeeType, size, isHot) {
    this.coffeeType = coffeeType;
    this.size = size;
    this.isHot = isHot;
  }
  _addWater() {
    return "water is ready\n";
  }
  _addCoffee() {
    return `${this.coffeeType} is selected\n`;
  }
  _grindCoffee() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${this.coffeeType} is ground\n`);
      }, 5000);
    });
  }
  _brewing() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${this.coffeeType} is brewed\n`);
      }, 8000);
    });
  }
  async _createCoffee() {
    const addWater = this._addWater();
    const addCoffee = this._addCoffee();
    console.log(addWater, addCoffee);
    const [groundCoffee, brewedCoffee] = await Promise.all([
      this._grindCoffee(),
      this._brewing(),
    ]);
    console.log(groundCoffee, brewedCoffee);
  }
  async serve() {
    await this._createCoffee();
    // this.timer();
    console.log("Coffee is ready, please enjoy");
  }
  timer() {
    setTimeout(() => {
      console.log("something");
    }, 5000);
  }
}

const coffee1 = new CoffeeMachine("Latte", "large", true);
coffee1.serve();
